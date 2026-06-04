# Estilos — Tailwind CSS v4

Cómo manejar estilos. Tailwind v4 es la base; los tokens de diseño vienen de Figma.

## Configuración v4 (importante)
- Tailwind v4 se configura **en CSS**, no en JS. **No existe `tailwind.config.js`.**
- Los tokens de diseño se declaran con la directiva `@theme` en el CSS global.
```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-brand: #1a3c34;
  --color-cream: #f5f1e8;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --spacing-section: 6rem;
}
```
- Cada token en `@theme` genera utilidades automáticamente (`bg-brand`, `font-display`, etc.) y queda disponible como variable CSS en runtime.

## Tokens desde Figma
- Los colores, tipografías y espaciados del cliente están en `docs/design-tokens.md`.
- Al empezar un proyecto, trasladá esos tokens al bloque `@theme`. Esa es la única fuente de verdad de estilos.
- Las clases que uses deben referenciar tokens, no valores mágicos. Preferí `bg-brand` sobre `bg-[#1a3c34]`.

## Convenciones de clases
- Usar utilidades de Tailwind directamente en el markup.
- Mobile-first: estilos base para móvil, breakpoints (`md:`, `lg:`) para pantallas grandes.
- Evitar valores arbitrarios (`w-[327px]`) salvo casos muy puntuales; preferir la escala del theme.
- Para variantes repetidas de un componente, manejarlas con props + lógica en el frontmatter, no copiando strings de clases enormes.
- Mantener el orden de clases legible (layout → espaciado → tipografía → color → estados).

## Cuándo NO usar Tailwind
- Animaciones complejas o estilos que Tailwind vuelve ilegibles → usar `<style>` scoped en el `.astro`.
- Estilos globales (reset, fuentes, tokens) → `global.css`.
- En general: Tailwind para el 95%, scoped styles para lo excepcional.

## Dark mode (si el proyecto lo pide)
- Estrategia basada en clase o `prefers-color-scheme` según el brief.
- Definir los tokens de ambos modos en `@theme` / con variables; no hardcodear colores por modo en el markup.

## Qué evitar
- No crear `tailwind.config.js`.
- No mezclar valores hardcodeados con tokens del theme.
- No usar `@apply` masivamente para recrear componentes; preferir componentes Astro reales.
