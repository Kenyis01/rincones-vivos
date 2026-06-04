# Componentes y patrones de Astro

Cómo escribir componentes, páginas y layouts en Astro correctamente.

## Anatomía de un componente `.astro`
```astro
---
// Frontmatter: código del servidor (corre en build). TypeScript.
interface Props {
  title: string;
  variant?: "primary" | "secondary";
}
const { title, variant = "primary" } = Astro.props;
---
<!-- Template: HTML semántico -->
<section class="...">
  <h2>{title}</h2>
  <slot />
</section>

<style>
  /* opcional: estilos scoped, solo si Tailwind no alcanza */
</style>
```

- El frontmatter (`---`) corre en build, no en el navegador. Ahí van imports, props, fetch de datos.
- Props siempre tipadas con `interface Props`.
- `<slot />` para contenido hijo. Slots nombrados con `<slot name="..." />`.

## Routing (file-based)
- Cada archivo en `src/pages/` es una ruta.
- `index.astro` → `/`
- `sobre-nosotros.astro` → `/sobre-nosotros`
- `[slug].astro` → ruta dinámica; requiere `getStaticPaths()` para sitios static.
- `404.astro` → página de error.

```astro
---
// Ruta dinámica static
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}
const { post } = Astro.props;
---
```

## Islas e interactividad (mínimo JS)
- Por defecto, **cero JavaScript** al cliente. Astro envía HTML.
- Solo hidratar cuando hay interactividad real e inevitable (un menú móvil, un carrusel).
- Para interacciones simples, preferir HTML/CSS nativo (`<details>`/`<summary>`, `:target`, `popover`) antes de un framework.
- Si hace falta JS, un `<script>` en el `.astro` suele alcanzar. Reservá frameworks (React) para componentes realmente complejos.
- Directivas de hidratación, de menor a mayor costo: `client:visible` (cuando entra en viewport) > `client:idle` > `client:load`. Preferir `client:visible`.

## Imágenes (siempre optimizadas)
- Usar `<Image />` o `<Picture />` de `astro:assets`. **Nunca** un `<img>` crudo para imágenes locales.
```astro
---
import { Image } from "astro:assets";
import hero from "../assets/hero.jpg";
---
<Image src={hero} alt="Descripción significativa" widths={[400, 800, 1200]} sizes="(max-width: 800px) 100vw, 800px" />
```
- `alt` siempre presente y descriptivo (vacío `alt=""` solo si es decorativa).
- Astro genera WebP/AVIF y previene CLS automáticamente.

## Layouts
- `BaseLayout.astro` contiene `<head>`, metadatos SEO y el shell común. Todas las páginas lo usan (directa o indirectamente).
- Layouts específicos (blog, landing) extienden o envuelven el base.
- Los metadatos SEO se pasan como props al layout. Ver `seo.md`.

## Buenas prácticas
- Componentes chicos y con una responsabilidad.
- Barrel exports con `index.astro` si una carpeta crece.
- No repetir markup: si un bloque aparece 2+ veces, hacelo componente.
- Datos y lógica en el frontmatter; el template queda limpio.
