# Proyecto — Sitio web de cliente (Astro)

Sitios web de clientes construidos con Astro. Prioridad absoluta: **rápidos, optimizados para SEO y accesibles**. El diseño se hace en Figma y se traduce a código (vía Figma MCP cuando esté disponible).

## Stack base
- **Framework:** Astro (static por defecto)
- **Estilos:** Tailwind CSS v4 (vía PostCSS — paquete `@tailwindcss/postcss`)
- **CMS (opcional, solo si el proyecto lo pide):** Keystatic
- **Deploy:** Cloudflare Pages (static)

Detalle completo de versiones y configuración: @.claude/rules/stack.md

## Comandos
Comandos estándar del proyecto (asumen un proyecto Astro con npm). Verificá los scripts reales en `package.json`.
- `npm install` — instalar dependencias (primera vez y tras cambios en `package.json`).
- `npm run dev` — servidor de desarrollo local (normalmente en `localhost:4321`).
- `npm run build` — compilar el sitio a `dist/` (lo que se publica).
- `npm run preview` — previsualizar el build de producción localmente.
- El deploy a Cloudflare Pages se dispara solo al hacer push a GitHub (no hay comando manual).

## Principios no negociables
1. **HTML semántico siempre.** Nunca usar `<div>` o `<span>` cuando existe un elemento correcto (`<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<button>`, etc.).
2. **Mínimo JavaScript.** Astro renderiza HTML estático. Solo usar islas (`client:*`) cuando haya interactividad real e inevitable.
3. **Static por defecto.** No agregar SSR ni adaptadores de servidor salvo que una funcionalidad concreta lo exija.
4. **No inventar.** Versiones, APIs y rutas reales viven en el código. Si no estás seguro de una versión o API, leé `package.json` o `astro.config.mjs` antes de escribir. Nunca asumas de memoria.
5. **No crear de más.** Solo crear carpetas/archivos que el proyecto necesita ahora. La estructura completa está *declarada*, pero no se materializa hasta que se usa.

## Reglas base (siempre activas)
Estas reglas aplican a casi todo el código y se cargan junto con este archivo:

- @.claude/rules/project-structure.md
- @.claude/rules/html-semantics.md
- @.claude/rules/astro-components.md
- @.claude/rules/styling.md

## Reglas situacionales (leer cuando corresponda)
No se cargan por defecto para no inflar el contexto. **Leé el archivo completo** antes de trabajar en ese tema:

- **Contenido / CMS:** leer `.claude/rules/content.md` cuando el proyecto use content collections o Keystatic.
- **SEO:** leer `.claude/rules/seo.md` al trabajar en `<head>`, metadatos, sitemap o structured data.
- **Accesibilidad:** leer `.claude/rules/a11y.md` al construir componentes interactivos, formularios o navegación.

## Auditorías bajo demanda
Al cerrar un sitio, o cuando se pida, auditá **SEO** y **accesibilidad** y resolvé los hallazgos por prioridad. Si hay skills de auditoría instalados, Claude los usará automáticamente; si no, hacé la revisión manualmente. Las reglas de `seo.md` y `a11y.md` son *preventivas* (qué hacer al escribir código); la auditoría es *correctiva* (qué arreglar después).

## Información del cliente
Cada proyecto tiene su brief en `docs/client-brief.md` (negocio, audiencia, páginas, tono, keywords) y sus tokens de diseño en `docs/design-tokens.md` (colores, tipografía, espaciados de Figma). Leé ambos antes de empezar a construir.

## Checklist antes de cerrar cualquier tarea
- ¿HTML semántico, sin `<div>` innecesarios?
- ¿JavaScript al mínimo (islas solo donde hace falta)?
- ¿Imágenes con `<Image />` / `<Picture />` de `astro:assets`?
- ¿Metadatos SEO presentes (title, description, canonical, OG)?
- ¿Accesible por teclado y con foco visible?
- ¿Versiones/APIs verificadas contra el código, no asumidas?
