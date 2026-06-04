# Contenido — Content Collections y Keystatic

Leer cuando el proyecto maneje contenido estructurado (blog, servicios, proyectos, casos) o tenga CMS para el cliente.

## Decisión: ¿con CMS o sin CMS?
- **Sin CMS (solo content collections):** ideal para sitios que el cliente edita rara vez o nunca, o donde editás vos. Más simple, más barato, menos superficie. **Es el default** para clientes chicos.
- **Con CMS (Keystatic):** cuando el cliente necesita editar contenido por su cuenta (blog activo, catálogo que cambia). Decisión que viene del brief.

## Content Collections (siempre que haya contenido estructurado)
- Definir colecciones con schema tipado en `src/content.config.ts`.
```ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```
- El schema valida el contenido en build: si falta un campo, falla temprano. Aprovechá esto.
- Consultar con `getCollection("blog")` y filtrar drafts en producción.
- Renderizar el cuerpo con el render de la entrada; envolver en el layout correspondiente.

## Keystatic (solo si el proyecto lo incluye)
- Config en `keystatic.config.ts` (raíz). Define `storage` y las colecciones/singletons que el cliente edita.
```ts
import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: { kind: "local" }, // local en dev; github/cloud en prod
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        content: fields.markdoc({ label: "Contenido" }),
      },
    }),
  },
});
```
- **Sincronizar schemas:** el schema de Keystatic y el de la content collection deben coincidir (mismos campos). Keystatic escribe los archivos; Astro los lee.
- Admin disponible en `/keystatic`. En producción requiere adaptador de servidor.
- Storage local en desarrollo; GitHub o Keystatic Cloud en producción (free hasta 3 usuarios).
- Etiquetas (`label`) en español, pensadas para que el cliente las entienda.

## Buenas prácticas
- Contenido fuera del código: nada de textos largos hardcodeados en componentes si pertenecen a una colección.
- Imágenes de contenido: gestionarlas para que Astro las optimice.
- Filtrar `draft: true` en builds de producción.
