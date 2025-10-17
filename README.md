# José Antonio Rodriguez Hernandez - Portfolio

Portfolio profesional de Full-Stack Tech Lead con 7+ años de experiencia, especializado en arquitecturas escalables y liderazgo técnico.

## 👨‍💻 Sobre el Proyecto

Este portfolio está construido con tecnologías modernas y mejores prácticas, reflejando mi experiencia como Tech Lead en el desarrollo de aplicaciones enterprise y la gestión de equipos técnicos.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router) con Static Export
- **UI:** shadcn/ui + Tailwind CSS + Framer Motion
- **Tipado:** TypeScript con Zod para validación de schemas
- **Contenido:** YAML + MDX (fuente única de verdad)
- **PDF Generation:** @react-pdf/renderer para CV descargable
- **i18n:** Sistema custom con soporte ES/EN sin recarga de página
- **Iconos:** Lucide React + SVG personalizados

## ✨ Características Destacadas

- **🌐 Bilingüe:** Soporte completo ES/EN con cambio de idioma sin recarga
- **📱 Responsive:** Diseño adaptable optimizado para todos los dispositivos
- **🎨 Modo Oscuro:** Tema claro/oscuro con persistencia en localStorage
- **📊 9 Proyectos:** Portfolio completo con screenshots y descripciones detalladas
- **🏢 Career Progression:** Visualización de ascensos y múltiples posiciones
- **📄 CV Descargable:** Generación dinámica de CV en PDF (ES/EN)
- **🎯 SEO Optimizado:** Meta tags, Open Graph, Schema.org, sitemap
- **♿ Accesible:** WCAG 2.1 AA compliant
- **⚡ Performance:** ~80KB homepage, Core Web Vitals optimizados

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [lang]/            # Rutas i18n (es/en)
│   │   ├── cv/[lang]/         # Generación de CV en PDF
│   │   ├── layout.tsx         # Layout raíz con providers
│   │   └── page.tsx           # Home (redirect a /es o /en)
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── sections/          # Secciones del portfolio
│   │   │   ├── hero.tsx       # Hero con animaciones
│   │   │   ├── about.tsx      # Sobre mí con estadísticas
│   │   │   ├── experience.tsx # Timeline con múltiples posiciones
│   │   │   ├── projects.tsx   # Grid de proyectos con hover
│   │   │   ├── skills.tsx     # Skills categorizados
│   │   │   └── education.tsx  # Educación formal
│   │   ├── company-logo.tsx   # Logos SVG/PNG con fallback
│   │   ├── tech-icon.tsx      # Iconos de tecnologías
│   │   └── language-switcher.tsx # Selector de idioma
│   ├── contexts/
│   │   └── language-context.tsx # Context API para i18n
│   └── lib/
│       ├── content.ts         # Parsers YAML/MDX
│       ├── schemas.ts         # Zod schemas para validación
│       └── utils.ts           # Utilidades
├── content/                    # Contenido estructurado
│   ├── site.{es,en}.yaml      # Info general del sitio
│   ├── about.{es,en}.mdx      # Bio y logros destacados
│   ├── experience.{es,en}.yaml # Experiencia laboral
│   ├── education.{es,en}.yaml  # Educación formal
│   ├── skills.{es,en}.yaml     # Skills (6 categorías)
│   ├── cv.{es,en}.yaml        # Datos para CV PDF
│   └── projects/              # 9 proyectos
│       ├── *.es.mdx           # Versiones español
│       └── *.en.mdx           # Versiones inglés (pendiente)
└── public/
    └── images/
        ├── perfil.svg         # Foto de perfil
        ├── capturas/          # Screenshots de proyectos (9)
        ├── icons/             # Tech icons (40+ SVG/PNG)
        └── logos/             # Company logos (SVG/PNG)
```

## 🛠️ Desarrollo Local

### Prerrequisitos

- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run format       # Formatear código con Prettier
npm run type-check   # Verificar tipos TypeScript
```

## 📝 Gestión de Contenido

Todo el contenido está centralizado en `/content` con validación Zod para type-safety.

### Archivos Principales

- **`site.{es,en}.yaml`** - Nombre, título, descripción, redes sociales
- **`about.{es,en}.mdx`** - Bio profesional con logros destacados
- **`experience.{es,en}.yaml`** - Historial laboral con soporte para múltiples posiciones
- **`education.{es,en}.yaml`** - Educación formal y certificaciones
- **`skills.{es,en}.yaml`** - Habilidades técnicas en 6 categorías
- **`projects/*.mdx`** - 9 proyectos con MDX enriquecido
- **`cv.{es,en}.yaml`** - Datos para generación de CV en PDF

### Agregar un Nuevo Proyecto

1. Crear `content/projects/mi-proyecto.es.mdx`:

```mdx
---
slug: mi-proyecto
title: Mi Proyecto Increíble
summary: Descripción breve que aparecerá en la tarjeta del proyecto
stack: ["React", "Node.js", "PostgreSQL"]
role: Full-Stack Developer
date: 2024-01-15
coverImage: /images/capturas/mi-proyecto.png
links:
  demo: https://demo.ejemplo.com
  repo: https://github.com/usuario/repo
---

## 🎯 Objetivo

Descripción del problema que resuelve...

## ✨ Características

- Feature 1
- Feature 2

## 🛠️ Stack Técnico

Stack detallado...

## 📚 Aprendizajes

Aprendizajes clave del proyecto...
```

2. Agregar screenshot en `public/images/capturas/mi-proyecto.png`
3. Crear versión inglés: `mi-proyecto.en.mdx`
4. El proyecto aparecerá automáticamente en ambos idiomas

### Múltiples Posiciones en Experiencia

Para mostrar ascensos o promociones dentro de la misma empresa:

```yaml
- company: Blackstone Studio
  logo: /images/logos/blackstone.svg
  url: https://blackstone.studio
  positions:
    - position: Tech-Team Lead
      period: Mayo 2023 - Actualidad
      description: |
        - Liderazgo de equipo de 5 desarrolladores
        - Arquitectura de microservicios con NestJS
        - Reducción de bugs en producción en 45%
    
    - position: Full Stack Developer Sr
      period: Septiembre 2021 - Mayo 2023
      description: |
        - Desarrollo de APIs RESTful y GraphQL
        - Implementación de CI/CD
```

## 🎨 Personalización

### Temas

El sitio incluye modo claro/oscuro con `next-themes`. Personalizar colores en:
- `tailwind.config.ts` - Configuración de Tailwind
- `src/app/globals.css` - Variables CSS custom properties

### Componentes shadcn/ui

Agregar nuevos componentes:

```bash
npx shadcn-ui@latest add [component-name]
```

### Iconos de Tecnologías

Los iconos están en `public/images/icons/`. El componente `TechIcon` intenta cargar SVG primero y hace fallback a PNG:

```tsx
<TechIcon name="react" />  // Busca react.svg, luego react.png
```

### Logos de Empresas

El componente `CompanyLogo` soporta SVG y PNG con fallback a iniciales:

```tsx
<CompanyLogo 
  src="/images/logos/empresa.svg" 
  alt="Empresa" 
  size={60} 
/>
```

## 🚢 Despliegue

### Vercel (Producción Actual)

**El sitio está desplegado en Vercel con dominio personalizado:**

**URLs:**
- **Producción:** `https://jose-rodriguez.dev`
- Dominio alternativo: `https://isc-joserodriguez.vercel.app`
- Repositorio: `isc-joserodriguez/isc-joserodriguez.github.io`

**Configuración:**
- Archivo `vercel.json` incluido con `outputDirectory: "out"`
- Build automático en cada push a `main`
- Deploy previews en Pull Requests
- Analytics integrado

**Ventajas de Vercel:**
- ✅ Dominio personalizado configurado
- ✅ SSL/HTTPS automático
- ✅ Edge Network global (baja latencia)
- ✅ Deploy previews en PRs
- ✅ Analytics y métricas

### GitHub Pages (Alternativa)

El proyecto también puede desplegarse en GitHub Pages usando **static export**:

```bash
npm run build  # Genera /out con sitio estático
```

**Workflow automático:**
- `.github/workflows/nextjs.yml` despliega automáticamente
- URL: `https://isc-joserodriguez.github.io`

**Archivo `vercel.json` incluido:**
```json
{
  "outputDirectory": "out",
  "buildCommand": "npm run build"
}
```

**Ventajas de Vercel:**
- ✅ Deploy previews en PRs
- ✅ Analytics integrado
- ✅ Dominio personalizado gratis
- ✅ Edge Network global

### Variables de Entorno

Crear `.env.local` para desarrollo local:

```env
# URL del sitio principal
NEXT_PUBLIC_SITE_URL=https://jose-rodriguez.dev
```

## 📊 SEO y Performance

### Métricas Actuales

- **Homepage Size:** ~80 KB
- **First Load JS:** 184 KB
- **Build Time:** < 10s
- **Pages Generated:** 8 (ES/EN variants)

### Optimizaciones

- ✅ **Metadata dinámica** por ruta e idioma
- ✅ **Open Graph** images personalizadas
- ✅ **Schema.org:** Person, WebSite, BreadcrumbList
- ✅ **Sitemap** multiidioma con alternates
- ✅ **robots.txt** configurado
- ✅ **Next.js Image** optimization
- ✅ **Static Export** para máximo performance
- ✅ **Framer Motion** con lazy loading
- ✅ **Accesibilidad** WCAG 2.1 AA compliant

## 🧪 Testing y Calidad

```bash
npm run lint          # ESLint + TypeScript
npm run type-check    # Verificación de tipos
npm run format        # Prettier
```

**Configuraciones:**
- ESLint con reglas de Next.js, React, TypeScript
- Prettier con plugin de Tailwind CSS
- TypeScript strict mode
- Zod schemas para runtime validation

## � Estado del Proyecto

### ✅ Completado

- [x] Sistema i18n ES/EN sin recarga
- [x] 9 proyectos con screenshots
- [x] Career progression (múltiples posiciones)
- [x] CV descargable en PDF (ES/EN)
- [x] Soporte SVG/PNG para logos
- [x] Modo oscuro con persistencia
- [x] Responsive design completo
- [x] SEO y Schema.org
- [x] Contenido profesional actualizado (Tech Lead, 7+ años)

### 📋 Pendiente

- [ ] Versiones en inglés de 9 proyectos (.en.mdx)
- [ ] Foto de perfil real (400x400px)
- [ ] Logos reales de empresas/instituciones
- [ ] Tests unitarios (Jest/Testing Library)
- [ ] Lighthouse CI en workflow

## �📄 Licencia

© 2025 José Antonio Rodriguez Hernandez. Todos los derechos reservados.

## 🤝 Contacto

- **Email:** isc.joserodriguez@gmail.com
- **LinkedIn:** [isc-joserodriguez](https://www.linkedin.com/in/isc-joserodriguez)
- **GitHub:** [isc-joserodriguez](https://github.com/isc-joserodriguez)
- **Portfolio:** [jose-rodriguez.dev](https://jose-rodriguez.dev)

---

**Tech Stack:** Next.js 14 • TypeScript • Tailwind CSS • Framer Motion • shadcn/ui • Zod • React PDF
