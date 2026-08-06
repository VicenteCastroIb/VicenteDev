# VicenteDev — Portfolio

Landing page de portfolio de Vicente Castro, desarrollador full-stack. Página de una sola sección (scroll continuo, navegación por anclas): header fijo, hero a pantalla completa, tarjetas hexagonales de proyectos, sección "sobre mí", stack + certificaciones, y footer con contacto.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS 4
- Fuentes: Sora (headings) e Inter (texto), auto-hospedadas vía `next/font`

## Estructura

```
src/
  app/            # layout, page y estilos globales
  components/     # Header, Hero, Projects, About, Skills, Footer
  lib/data.ts     # contenido (nav, proyectos, skills, certificaciones, footer)
public/           # imágenes (hero-photo.jpg, proyectos)
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Flujo de ramas

- `main` — producción
- `dev` — desarrollo activo (rama por defecto de trabajo)
- `test` — validación antes de pasar a main

Todo el trabajo nuevo se hace en `dev`.
