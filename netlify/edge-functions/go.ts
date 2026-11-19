import type { Config, Context } from "@netlify/edge-functions";

type ProductLink = {
  title: string;
  url: string;
  affiliateUrl?: string;
};

type Catalog = {
  pid?: string;
  products: Record<string, ProductLink>;
};

const FALLBACK_PATH = "/#catalogo";

export default async (request: Request, context: Context): Promise<Response> => {
  const url = new URL(request.url);
  const id = url.pathname.startsWith("/go/")
    ? decodeURIComponent(url.pathname.slice(4))
    : url.searchParams.get("id");

  if (!id) {
    return Response.redirect(new URL(FALLBACK_PATH, url.origin), 302);
  }

  let catalog: Catalog | null = null;
  try {
    const response = await fetch(new URL("/assets/affiliate-links.json", url.origin), {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    if (response.ok) {
      catalog = (await response.json()) as Catalog;
    }
  } catch (error) {
    console.error("No se pudo leer el catálogo de afiliados", error);
  }

  const product = catalog?.products?.[id];
  const affiliateUrl = product?.affiliateUrl?.trim() ?? "";
  const target = affiliateUrl || product?.url?.trim() || "";

  console.log(
    JSON.stringify({
      event: "affiliate_click",
      id,
      found: Boolean(product),
      using_affiliate_link: Boolean(affiliateUrl),
      pid: catalog?.pid?.trim() || null,
      target: target || null,
      country: context.geo?.country?.code ?? null,
      referrer: request.headers.get("referer") ?? null,
      user_agent: request.headers.get("user-agent") ?? null,
      at: new Date().toISOString(),
    }),
  );

  if (!target) {
    return Response.redirect(new URL(FALLBACK_PATH, url.origin), 302);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: target,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
};

export const config: Config = { path: ["/go", "/go/*"] };
