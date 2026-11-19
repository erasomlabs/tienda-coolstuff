# Tienda Coolstuff

**Descubridores de lo oculto. Grandes ofertas.**

[Visitar la tienda](https://tienda-coolstuff.netlify.app)

## Qué es Tienda Coolstuff

Tienda Coolstuff es un catálogo de afiliados en español que encuentra descuentos y cupones para compras en AliExpress, con precios referenciales en pesos colombianos (COP). La tienda no cobra ni envía productos: la operación ocurre en AliExpress. El aviso de afiliados aparece en el catálogo.

## Estructura de la tienda

- Catálogo único, sin filtros ni categorías visibles.
- Fichas con imagen, descripción breve, precio de referencia, cupón con fecha y dato de descuento.
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

## Publicidad

El brief con audiencia, productos prioritarios, hooks, lenguaje permitido, llamadas a la acción y métricas está en [`docs/brief-publicidad.md`](docs/brief-publicidad.md).

## Disponibilidad

| Canal | Estado |
|---|---|
| Sitio web | [Disponible](https://tienda-coolstuff.netlify.app) |
| Google Play | No publicada en este momento |
| Aptoide | No publicada en este momento |
| APK en Releases | Se publicará cuando finalice el proyecto |

---

**Eraso M Labs** · Innovación Digital con Propósito
