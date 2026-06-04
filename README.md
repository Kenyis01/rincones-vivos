# Plantilla de sitios web (Astro)

Base reutilizable para construir sitios de clientes con Astro, optimizados para velocidad, SEO y accesibilidad. Pensada para trabajar con Claude Code dentro de Cursor.

## Qué hay acá
- **`CLAUDE.md`** — instrucciones que Claude Code lee automáticamente en cada sesión. Es el centro de todo.
- **`.claude/rules/`** — reglas modulares (stack, estructura, HTML semántico, estilos, contenido, SEO, accesibilidad). El `CLAUDE.md` las importa o le dice a Claude cuándo leerlas.
- **`docs/`** — plantillas a completar por cada cliente: `client-brief.md` (info del negocio) y `design-tokens.md` (colores y tipografías del diseño).

## Cómo arrancar un cliente nuevo
1. En GitHub, apretá **"Use this template"** y creá un repositorio nuevo con el nombre del cliente.
2. Cloná el repo (con GitHub Desktop) y abrilo en Cursor.
3. Completá `docs/client-brief.md` y `docs/design-tokens.md` con la info real del cliente.
4. Pedile a Claude que arranque el proyecto. Va a seguir las reglas del `CLAUDE.md`.

## Notas
- Las versiones reales del stack quedan en `package.json` una vez instalado. Las reglas dicen "verificá ahí, no asumas".
- Los skills de SEO y accesibilidad que tengas instalados en Claude Code se usan solos cuando hacen falta; no están nombrados en las reglas a propósito (para no tener que actualizarlas si los cambiás).
- El deploy es a Cloudflare Pages y se dispara al hacer push a GitHub.
