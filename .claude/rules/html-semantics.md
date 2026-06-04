# HTML semántico

Regla central del proyecto: el HTML debe ser **semántico**. Cada elemento se elige por su significado, no por su apariencia. Esto mejora SEO, accesibilidad y mantenibilidad de una sola vez.

## Principio
**Antes de escribir `<div>` o `<span>`, preguntate si existe un elemento con significado.** Casi siempre existe. `<div>` y `<span>` son el último recurso, solo para agrupar/envolver con fines puramente de estilo o layout cuando ningún otro elemento aplica.

## Estructura de página
Toda página tiene estos landmarks:
- `<header>` — encabezado del sitio (logo, nav principal).
- `<nav>` — navegación. Si hay varias, diferenciar con `aria-label`.
- `<main>` — contenido principal. **Uno solo por página.**
- `<footer>` — pie del sitio.
- `<aside>` — contenido relacionado/secundario (no el principal).

## Secciones y contenido
- `<section>` — agrupación temática de contenido, normalmente con un encabezado.
- `<article>` — contenido autocontenido y distribuible (post, tarjeta de servicio, ficha).
- `<figure>` + `<figcaption>` — imágenes/diagramas con epígrafe.

## Jerarquía de encabezados
- **Un solo `<h1>` por página** (el título principal).
- No saltar niveles: `<h1>` → `<h2>` → `<h3>`, sin pasar de `<h1>` a `<h3>`.
- Los niveles reflejan la estructura del contenido, **no** el tamaño del texto. Para el tamaño, usar clases CSS.

## Elementos correctos para cada caso
- Acción que ejecuta algo (abrir menú, enviar) → `<button type="button">`. **Nunca** un `<div onclick>`.
- Navegar a otra URL → `<a href="...">`. Si parece botón, se estiliza con CSS.
- Lista de ítems → `<ul>`/`<ol>` + `<li>`. Los menús de navegación son listas.
- Datos tabulares → `<table>` con `<thead>`, `<tbody>`, `<th scope="...">`. Nunca tablas para layout.
- Formularios → `<form>` con `<label>` asociado a cada `<input>` (vía `for`/`id`). Agrupar con `<fieldset>`/`<legend>`.
- Texto destacado con importancia → `<strong>`; con énfasis → `<em>`. No `<b>`/`<i>` por significado.
- Fechas → `<time datetime="...">`.
- Contacto → enlaces `mailto:` / `tel:`.
- Detalle expandible → `<details>`/`<summary>` (sin JS).

## Cuándo SÍ usar `<div>` / `<span>`
- `<div>`: contenedor de layout (grid/flex) cuando no hay un elemento semántico que aplique.
- `<span>`: envolver un fragmento de texto inline solo para estilizarlo.
- Si te encontrás usando muchos `<div>` anidados, frená y revisá si hay elementos semánticos que correspondan.

## Auto-chequeo
Antes de cerrar un componente: ¿cada elemento comunica su significado? ¿Un lector de pantalla entendería la estructura solo con el HTML, sin CSS?
