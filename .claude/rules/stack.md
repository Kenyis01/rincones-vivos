# Stack y configuración

Esta es la fuente de verdad sobre QUÉ tecnologías se usan y CÓMO están configuradas. El objetivo es que no se inventen herramientas, versiones ni APIs.

## Versiones
**Regla de oro:** las versiones reales están en `package.json`. Antes de usar una API que dependa de la versión (sintaxis de config, nombres de adaptadores, etc.), **leé `package.json` y `astro.config.mjs`**. No asumas versiones de memoria.

Líneas mayores que usa este template:
- **Astro 6.x**
- **Tailwind CSS 4.x**
- **Keystatic** (solo si el proyecto lo incluye)

Si `package.json` muestra otra versión mayor, esa manda. Avisá si hay un desfasaje grande.

## Cómo está configurado cada cosa

### Astro
- Modo de salida: **`static`** por defecto en `astro.config.mjs`.
- Si un proyecto necesita SSR, se opta por ruta con `export const prerender = false`, no se cambia todo el sitio a server.
- Integraciones que suelen estar: `@astrojs/sitemap`. Otras (react, mdx) solo si el proyecto las pide.

### Tailwind CSS v4
- Se procesa vía **PostCSS**: paquete `@tailwindcss/postcss`, configurado en `postcss.config.mjs`. Astro lo detecta automáticamente.
- **NO usar `@tailwindcss/vite`** en este proyecto: falla en el build con el motor de Vite de Astro 6 (bug conocido). Por eso usamos la variante PostCSS.
- **NO usar** la integración vieja `@astrojs/tailwind` (es legacy de Tailwind v3).
- **NO existe `tailwind.config.js`** en v4. La configuración y los tokens viven en CSS con la directiva `@theme`. Ver `styling.md`.
- El CSS global se importa una vez (ej. `src/styles/global.css` con `@import "tailwindcss";`).

### Keystatic (opcional)
- Solo presente si el proyecto necesita CMS para el cliente.
- Config en `keystatic.config.ts` en la raíz.
- Storage: local en desarrollo, GitHub/Cloud en producción.
- Requiere un adaptador de servidor para el admin en producción.
- Si el proyecto NO tiene CMS, no instalar ni mencionar Keystatic.

### Deploy
- **Cloudflare Pages**, salida static.
- Sin Sharp en SSR de Cloudflare: para sitios static no es problema (Astro optimiza imágenes en build).

### Formularios de contacto
Cloudflare Pages **no** tiene manejo de formularios nativo (a diferencia de Netlify). La mayoría de los sitios de cliente van a necesitar un formulario de contacto, así que se define por proyecto cómo se resuelve. Opciones, de menor a mayor complejidad:
- **Servicio externo** (Formspree, Web3Forms): el formulario envía a su endpoint y el mensaje llega por email. Más simple, sin backend. Recomendado para la mayoría.
- **Cloudflare Pages Function**: una función serverless propia que procesa el envío (más control, algo más de trabajo).
- **mailto:** como último recurso para sitios mínimos (abre el cliente de correo del visitante; peor experiencia).
El destino de los mensajes y la opción elegida se anotan en `docs/client-brief.md`.

## Qué NO hacer
- No agregar dependencias "por las dudas". Cada paquete se instala con una razón concreta.
- No usar `@astrojs/tailwind` (legacy).
- No usar `@tailwindcss/vite` (falla en Astro 6; este proyecto usa `@tailwindcss/postcss`).
- No crear `tailwind.config.js` (no aplica en v4).
- No inventar nombres de adaptadores, plugins o APIs. Verificá en la doc o en el código.
- No pasar a SSR todo el sitio por una sola funcionalidad dinámica.
