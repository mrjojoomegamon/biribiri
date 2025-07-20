# BIRIBIRI - Fisioterapia Deportiva & Suplementos Premium

## 🏆 Descripción del Proyecto

Sitio web premium para **BIRIBIRI**, un centro especializado en fisioterapia deportiva y venta de suplementos premium. Diseñado para atletas exigentes que buscan resultados excepcionales.

## ✨ Características Principales

### 🎨 Diseño & UX
- **Dark Theme Premium** con colores BIRIBIRI (#1a1a1a, #e31e24)
- **Tipografía Bold** y uppercase para máximo impacto
- **Micro-interactions** sutiles pero efectivas
- **Responsive Design** mobile-first
- **Animaciones CSS** optimizadas para rendimiento

### 🛠️ Tecnologías
- **Angular 19** (sin SSR)
- **Tailwind CSS 3** con configuración personalizada
- **TypeScript** estricto
- **Standalone Components** para máximo rendimiento
- **Lazy Loading** en todas las rutas

### 📱 Páginas Implementadas
1. **Home** - Hero impactante + showcase de productos
2. **Servicios** - Fisioterapia especializada con filtros
3. **Suplementos** - Catálogo completo con búsqueda avanzada
4. **Sobre Mí** - Historia del especialista y credenciales
5. **Contacto** - Formulario avanzado + booking de citas

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** v20.19+ o v22.12+
- **npm** 8.0+

### Pasos de Instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```

3. **Abrir en navegador**
   ```
   http://localhost:4200
   ```

## 🎨 Sistema de Diseño BIRIBIRI

### Colores Principales
```css
--bg-primary: #1a1a1a          /* Fondo principal */
--bg-secondary: #2a2a2a        /* Fondo secundario */
--accent: #e31e24              /* Color de marca */
--accent-hover: #c41e24        /* Hover estado */
--text-primary: #ffffff        /* Texto principal */
--text-secondary: #cccccc      /* Texto secundario */
--text-highlight: #ffd700      /* Destacados */
```

### Funcionalidades Implementadas
- ✅ Navegación fija con banner promocional
- ✅ Filtros avanzados por categoría y búsqueda
- ✅ Formularios reactivos con validación
- ✅ Cards de productos interactivas
- ✅ Sistema de componentes escalable
- ✅ SEO optimizado con metadatos

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm start              # Servidor de desarrollo
npm run build          # Build de producción

# Testing
npm run test           # Tests unitarios
npm run lint           # ESLint
```

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios y modelos principales
│   ├── shared/                  # Componentes reutilizables
│   ├── layout/                  # Header, Footer, Navigation
│   ├── features/                # Páginas principales
│   │   ├── home/
│   │   ├── services/
│   │   ├── supplements/
│   │   ├── about/
│   │   └── contact/
│   └── app.routes.ts           # Rutas con lazy loading
└── styles.css                 # Estilos globales + Tailwind
```

## 📞 Contacto

**BIRIBIRI Centro de Fisioterapia**
- Email: info@biribiri.com
- Teléfono: +34 123 456 789

---

**⚡ Desarrollado con Angular 19 + Tailwind CSS 3**  
*Para atletas que no se conforman con menos*
