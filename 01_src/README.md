# Tienda Coolstuff - Tienda de afiliados

## Identificador de la aplicación
- applicationId: `erasom.tienda.coolstuff`

## Cómo abrir
1. Abre Android Studio.
2. Selecciona "Open" y busca la carpeta:
   `D:\Antigravity\erasomlabs\tienda.coolstuff\01_src`
3. Espera a que Gradle sincronice.
4. Conecta un dispositivo Android o inicia un emulador.
5. Haz clic en Run (▶).

## Modelo de negocio
- **Afiliado/Comisión**: La app muestra productos de diferentes proveedores.
- Los enlaces de compra redirigen a las tiendas oficiales de los proveedores.
- Tú recibes comisión por cada venta generada a través de tus enlaces.
- No se maneja inventario ni envíos (todo lo gestiona el proveedor).

## Proveedores recomendados para afiliados
| Proveedor | Comisión | Tipo de productos |
|-----------|----------|-------------------|
| Amazon Associates | 1-10% | Todo tipo |
| MercadoLibre Afiliados | Variable | Todo tipo (Colombia/Latam) |
| AliExpress Affiliate | 3-8% | Electrónica, hogar |
| CJ Affiliate | Variable | Marcas premium |
| ShareASale | Variable | Nichos específicos |

## Cómo configurar
1. Regístrate en los programas de afiliados de los proveedores.
2. Obtén tus enlaces de afiliado.
3. Reemplaza las URLs en `store.html` con tus enlaces de afiliado.
4. Actualiza la URL en `MainActivity.kt` si despliegas la tienda en Netlify.

## Notas
- La tienda se carga desde `assets/store.html` (offline).
- Para actualizar productos, edita `store.html` y recompila.
- AdMob se puede agregar cuando tengas el ID.
- La firma de la APK debe usar la misma upload key de Google Play.
