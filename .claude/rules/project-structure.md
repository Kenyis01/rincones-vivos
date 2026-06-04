# Estructura del proyecto

Define DÓNDE va cada archivo y CÓMO se nombra. Mantiene consistencia entre todos los proyectos de clientes.

## Regla clave: declarado ≠ creado
Esta estructura está **declarada** para que sepas dónde corresponde cada cosa. Pero:
- **Si el proyecto necesita algo, creá la carpeta/archivo en su lugar correcto.**
- **Si no lo necesita, no lo crees.** No generes carpetas vacías "por las dudas".

Ejemplo: si el sitio no tiene blog, no existe `src/content/blog/`. Si más adelante se agrega, va exactamente ahí.

## Árbol de referencia
```
public/                    # assets servidos tal cual: favicon, robots.txt, fonts
src/
  components/
    common/                # UI reutilizable: Button, Card, Badge
    layout/                # Header, Footer, Nav
    sections/              # bloques de página: Hero, Features, CTA, Testimonials
  layouts/
    BaseLayout.astro       # <head>, SEO, shell compartido
    PageLayout.astro       # layout de páginas generales
    (BlogPostLayout.astro) # solo si hay blog
  pages/                   # rutas (file-based routing). SOLO rutas acá.
    index.astro
    404.astro
  content/                 # content collections (solo si hay contenido estructurado)
  styles/
    global.css             # @import "tailwindcss" + @theme tokens
  lib/                     # utils y helpers (formateo, fetch, etc.)
  assets/                  # imágenes procesadas por Astro (astro:assets)
astro.config.mjs
package.json
keystatic.config.ts        # solo si hay CMS
```

## Reglas de naming
- **Componentes y layouts:** `PascalCase.astro` → `Hero.astro`, `BaseLayout.astro`.
- **Páginas:** `kebab-case` o `index` → `index.astro`, `sobre-nosotros.astro`, `[slug].astro`.
- **Utils en `lib/`:** `camelCase.ts` → `formatDate.ts`.
- **Colecciones de contenido:** `kebab-case` plural → `content/blog/`, `content/proyectos/`.
- **Carpetas:** `kebab-case` o categoría clara (`common`, `layout`, `sections`).

## Dónde va cada cosa
- ¿UI que se repite en varios lados? → `components/common/`
- ¿Encabezado, pie, navegación? → `components/layout/`
- ¿Un bloque grande de una página (hero, sección de servicios)? → `components/sections/`
- ¿Una página nueva / ruta? → `pages/`
- ¿Una función auxiliar? → `lib/`
- ¿Una imagen que Astro debe optimizar? → `src/assets/` (importada en código)
- ¿Un archivo estático que se sirve igual (PDF, favicon)? → `public/`
- ¿Estilos globales o tokens? → `src/styles/global.css`

## Antes de crear un archivo
Preguntate: ¿ya existe un lugar para esto en el árbol? Usalo. ¿El proyecto realmente lo necesita ahora? Si no, no lo crees.
