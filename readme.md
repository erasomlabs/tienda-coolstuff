# Tienda Coolstuff

**Objetos útiles, elegidos por función.**

[Visitar la tienda](https://tienda-coolstuff.netlify.app)

## Qué es Tienda Coolstuff

Tienda Coolstuff es un catálogo de afiliados en español con precios referenciales en pesos colombianos (COP). La tienda no cobra ni envía productos: la operación ocurre en AliExpress. El aviso de afiliados aparece en el catálogo.

## Estructura de la tienda

- Catálogo único, sin filtros ni categorías visibles.
- Fichas con imagen, descripción breve, precio de referencia y dato de descuento.
- Aviso de afiliados breve.
- Preguntas frecuentes desplegables.
- Contacto por Messenger.

El detalle de cada producto, precio y cupón está en [`assets/catalogo-elegido.json`](assets/catalogo-elegido.json).

## Desarrollo

```bash
node build.mjs     # genera .deploy/
netlify dev        # servidor local + Edge Functions
```

- `index.html`: catálogo estático en español y JSON-LD `ItemList`.
- `assets/catalogo-elegido.json`: fuente legible de los productos elegidos.
- `assets/affiliate-links.json`: URLs de destino usadas por la Edge Function.
- `netlify/edge-functions/go.ts`: redirect de clics y logging.
- `netlify.toml`: build, headers de seguridad y caché.

## Investigación

El análisis de comisiones, categorías, redes y el plan 30/60/90 está en [`docs/investigacion-afiliados-aliexpress-2026.md`](docs/investigacion-afiliados-aliexpress-2026.md). El shortlist histórico está en [`assets/productos-candidatos.json`](assets/productos-candidatos.json).

## Disponibilidad

| Canal | Estado |
|---|---|
| Sitio web | [Disponible](https://tienda-coolstuff.netlify.app) |
| Google Play | No publicada en este momento |
| Aptoide | No publicada en este momento |
| APK en Releases | Se publicará cuando finalice el proyecto |

---

**Eraso M Labs** · Innovación Digital con Propósito
