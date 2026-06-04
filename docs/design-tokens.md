# Tokens de diseño

> Completar con los valores del diseño en Figma. Estos tokens se trasladan al bloque `@theme` de `src/styles/global.css` (ver `styling.md`). Son la única fuente de verdad de estilos del proyecto.

## Colores
> Nombrar por rol (qué hace), no por apariencia. "brand", "surface", "text", no "verde1".

| Token | Valor (hex/oklch) | Uso |
|---|---|---|
| `--color-brand` | (ej. #1a3c34) | Color principal de marca |
| `--color-brand-dark` | | Variante oscura / hover |
| `--color-accent` | | Acento / CTA |
| `--color-bg` | | Fondo base |
| `--color-surface` | | Tarjetas, paneles |
| `--color-text` | | Texto principal |
| `--color-text-muted` | | Texto secundario |
| `--color-border` | | Bordes / divisores |

> Verificar contraste de cada par texto/fondo (mínimo 4.5:1). Ver `a11y.md`.

## Tipografía
| Token | Valor | Uso |
|---|---|---|
| `--font-display` | (ej. "Playfair Display", serif) | Títulos |
| `--font-body` | (ej. "DM Sans", sans-serif) | Cuerpo de texto |

**Escala de tamaños** (si el diseño define una):
- (ej. base 16px, escala Major Second 1.125, o lo que indique Figma)

**Fuentes:** ¿de dónde se cargan? (Google Fonts, self-hosted). Preferir self-hosted o subset para performance.

## Espaciado
> Si el diseño usa una escala, declararla. Si no, usar la de Tailwind por defecto.
- `--spacing-section` (ej. 6rem) — separación entre secciones grandes
- (otros espaciados custom si los hay)

## Bordes y radios
- `--radius-sm`
- `--radius-md`
- `--radius-lg`

## Sombras
- `--shadow-sm`
- `--shadow-md`

## Breakpoints
> Por defecto los de Tailwind (sm 640, md 768, lg 1024, xl 1280). Anotar solo si el diseño define otros.

## Modo oscuro
- **¿El sitio tiene dark mode?** (sí / no)
- Si sí, declarar los valores de cada token para el modo oscuro.

## Notas
- (Cualquier particularidad del sistema visual: estados hover/focus, iconografía, ilustraciones, etc.)
