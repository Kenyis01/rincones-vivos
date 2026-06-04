# SEO

Leer al trabajar en `<head>`, metadatos, sitemap o structured data. Estas reglas son **preventivas** (qué incluir al construir). Para auditorías profundas, ejecutá una auditoría de SEO sobre el sitio servido (Claude usará el skill de SEO instalado, si hay uno).

## En cada página (vía BaseLayout)
El `<head>` debe incluir siempre, con valores por página:
- `<title>` único y descriptivo (≈50-60 caracteres).
- `<meta name="description">` única (≈150-160 caracteres).
- `<link rel="canonical" href="...">` con la URL absoluta.
- `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- `<html lang="es">` (o el idioma del cliente).

Pasar título y descripción como props al layout, nunca hardcodear el mismo para todo el sitio.

## Open Graph y Twitter (compartir en redes)
```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://.../og.jpg" />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```
- Imagen OG con URL **absoluta**. Tamaño recomendado 1200×630.

## Sitemap y robots
- Integración `@astrojs/sitemap` activada en `astro.config.mjs` (requiere `site` configurado con el dominio).
- `public/robots.txt` apuntando al sitemap.

## Structured data (JSON-LD) según el negocio
Incluir el tipo correcto de Schema.org en las páginas relevantes:
- **Negocio local con local físico** → `LocalBusiness` (nombre, dirección, teléfono, horarios, geo).
- **Estudio de abogados** → `LegalService` (o `Attorney`).
- **Servicios profesionales** → `ProfessionalService`.
- **Artículos de blog** → `Article` / `BlogPosting`.
- **Migas de pan** → `BreadcrumbList`.
- Inyectar como `<script type="application/ld+json">` en el layout/página.

## Performance = SEO
- Imágenes con `<Image />` (ver `astro-components.md`).
- JavaScript al mínimo (ver principios en CLAUDE.md).
- Fuentes optimizadas (preload de las críticas, `font-display: swap`).
- Objetivo: Core Web Vitals en verde (LCP, CLS, INP). Verificar con una auditoría de performance.

## Buenas prácticas de contenido
- URLs limpias en `kebab-case`, descriptivas.
- Un `<h1>` por página alineado a la keyword principal (ver `html-semantics.md`).
- `alt` descriptivo en imágenes.
- Enlaces internos coherentes entre páginas.

## Para auditar
Al terminar un sitio (o cuando se pida), corré una auditoría de SEO y resolvé los hallazgos por prioridad.
