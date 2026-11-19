# Tienda Coolstuff

**Objetos útiles, elegidos por función. Compra final en AliExpress.**

[Visitar la tienda](https://tienda-coolstuff.netlify.app)

## Qué es Tienda Coolstuff

Tienda Coolstuff es un catálogo de afiliados en español. Reúne veinte productos de ocho nichos —hogar, tecnología, cocina, bienestar, mascotas, belleza, seguridad y auto— con precios referenciales en pesos colombianos (COP).

La tienda no cobra ni envía productos: la compra, el pago, el envío y las devoluciones ocurren en AliExpress. Si los enlaces de afiliado están activos, Tienda Coolstuff recibe una comisión sin costo adicional para quien compra. El aviso de afiliados aparece en el catálogo y en las preguntas frecuentes.

## Cómo funciona

1. Exploras el catálogo y filtras por categoría.
2. Al elegir un producto, el enlace pasa por `/go/<id>`.
3. Una Edge Function registra el clic y redirige con `302` a AliExpress.
4. El precio final, el envío y la garantía se confirman en AliExpress antes de pagar.

## Estado de los enlaces de afiliado

Los enlaces actuales son **URLs verificadas de AliExpress** (fichas de producto para los diez productos nuevos y búsquedas para los diez originales) y todavía no generan comisión. Están centralizados en [`assets/affiliate-links.json`](assets/affiliate-links.json). El inventario investigado está en [`assets/productos-candidatos.json`](assets/productos-candidatos.json) y el análisis en [`docs/investigacion-afiliados-aliexpress-2026.md`](docs/investigacion-afiliados-aliexpress-2026.md).

Para activar las comisiones:

1. Obtén tu PID en [AliExpress Portals](https://portals.aliexpress.com/).
2. Pega el valor en el campo `pid` del JSON.
3. Reemplaza `affiliateUrl` de cada producto por el enlace de seguimiento generado en Portals. El campo `url` se conserva como respaldo.
4. Ejecuta `node build.mjs` y haz deploy.

La Edge Function usa `affiliateUrl` cuando existe y cae a `url` si está vacío, así que el catálogo nunca queda con enlaces rotos.

## Desarrollo

```bash
node build.mjs     # genera .deploy/
netlify dev        # servidor local + Edge Functions
```

- `index.html`: catálogo estático en español, filtros y JSON-LD `ItemList`.
- `assets/affiliate-links.json`: fuente única de URLs de destino.
- `netlify/edge-functions/go.ts`: redirect de clics y logging.
- `netlify.toml`: build, headers de seguridad y caché.

## Disponibilidad

| Canal | Estado |
|---|---|
| Sitio web | [Disponible](https://tienda-coolstuff.netlify.app) |
| Google Play | No publicada en este momento |
| Aptoide | No publicada en este momento |
| APK en Releases | Se publicará cuando finalice el proyecto |

---

**Eraso M Labs** · Innovación Digital con Propósito
