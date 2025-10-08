# Tabaquería Rodriguez - E-commerce React App

Una aplicación de e-commerce completa para una tabaquería, desarrollada con React, React Router, Firebase y Bootstrap.

## 🚀 Características Principales

### ✅ Sistema de Carrito de Compras

- **Agregar productos** al carrito con cantidad personalizable
- **Carrito persistente** usando sessionStorage
- **Gestión de cantidades** (incrementar/decrementar)
- **Eliminar productos** individuales
- **Vaciar carrito** completo
- **Cálculo automático** de subtotales

### ✅ Navegación y Routing

- **React Router v6** con HashRouter
- **Rutas dinámicas** con parámetros (`:id`, `:category`)
- **Navegación entre páginas** sin recarga
- **Enlaces activos** en la navbar

### ✅ Gestión de Estado

- **Context API** para el carrito global
- **CartProvider** con funciones de gestión
- **Estado persistente** del carrito
- **Hooks personalizados** (useCart)

### ✅ Formulario de Checkout

- **Validación de formularios** con React Bootstrap
- **Integración con Firebase** para órdenes
- **Notificaciones toast** con react-hot-toast
- **Navegación automática** después del checkout

### ✅ Diseño y Estilos

- **CSS personalizado** con diseño consistente
- **Bootstrap** para componentes de formulario
- **Responsive design** para móviles y desktop
- **Tema personalizado** con colores de marca

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Framework principal
- **React Router DOM 7.8.2** - Navegación
- **Firebase 12.3.0** - Base de datos y autenticación
- **Bootstrap 5.3.8** - Componentes UI
- **React Bootstrap 2.10.10** - Componentes React
- **React Hot Toast 2.6.0** - Notificaciones
- **Vite 7.1.5** - Build tool y dev server

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── CartContainer.jsx      # Página del carrito
│   ├── CartWidget.jsx         # Widget del carrito en navbar
│   ├── Checkout.jsx           # Formulario de checkout
│   ├── ItemCard.jsx           # Tarjeta de producto
│   ├── ItemCount.jsx          # Contador de cantidad
│   ├── ItemDetail.jsx         # Detalle del producto
│   ├── ItemDetailContainer.jsx # Container del detalle
│   ├── ItemList.jsx           # Lista de productos
│   ├── ItemListContainer.jsx  # Container de la lista
│   ├── NavBar.jsx             # Barra de navegación
│   └── NavBarContainer.jsx    # Container de la navbar
├── context/
│   ├── CartContext.jsx        # Context del carrito
│   └── CartProvider.jsx       # Provider del carrito
├── css/
│   ├── cart.css               # Estilos del carrito
│   ├── cartwidget.css         # Estilos del widget
│   ├── checkout.css           # Estilos del checkout
│   └── navbar.css             # Estilos de la navbar
├── firebase/
│   ├── config.js              # Configuración de Firebase
│   └── db.js                  # Funciones de base de datos
├── App.jsx                    # Componente principal
├── App.css                    # Estilos globales
├── main.jsx                   # Punto de entrada
└── index.css                  # Estilos base
```

## 🛣️ Rutas Disponibles

```
/ - Página principal (todos los productos)
/category/:category - Productos por categoría
/item/:id - Detalle de producto individual
/cart - Página del carrito
/checkout - Formulario de checkout
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd ProyectoFinal+Romano

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
pnpm dev          # Servidor de desarrollo
pnpm build        # Build para producción
pnpm preview      # Preview del build
pnpm lint         # Linter de código
```

## 🌐 Deploy en Vercel

El proyecto está configurado para deploy automático en Vercel:

1. **Conectar repositorio** a Vercel
2. **Configuración automática** con `vercel.json`
3. **Deploy automático** en cada push

### Configuración de Vercel

- **Framework**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install --no-frozen-lockfile`

## 🔥 Configuración de Firebase

Para usar la funcionalidad de órdenes, configura Firebase:

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilitar Firestore Database
3. Actualizar `src/firebase/config.js` con tu configuración
4. Configurar reglas de seguridad en Firestore

## 🎨 Características de Diseño

- **Colores de marca**: Morado (#9d2497) como color principal
- **Tipografía**: Google Fonts (Poppins)
- **Layout**: Responsive con CSS Grid y Flexbox
- **Componentes**: Reutilizables y modulares
- **Estados**: Loading, error y success states

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptable a tablets y desktop
- **Touch Friendly**: Botones y enlaces optimizados para touch
- **Performance**: Carga rápida en todos los dispositivos

## 🔧 Funcionalidades del Carrito

### Gestión de Productos

- Agregar productos con cantidad específica
- Actualizar cantidades existentes
- Eliminar productos individuales
- Vaciar carrito completo

### Persistencia

- Carrito guardado en sessionStorage
- Persiste entre recargas de página
- Se limpia al cerrar el navegador

### Cálculos

- Precio por producto
- Total por item (precio × cantidad)
- Subtotal general del carrito
- Formateo de números con separadores

## 🛒 Proceso de Checkout

1. **Validación**: Email y nombre requeridos
2. **Envío**: Datos enviados a Firebase
3. **Confirmación**: Toast de éxito con ID de orden
4. **Limpieza**: Carrito vaciado automáticamente
5. **Redirección**: Vuelta a la página principal

## 🐛 Solución de Problemas

### Error de pnpm lockfile

```bash
pnpm install --no-frozen-lockfile
```

### Build falla por CSS

- Verificar que `@import` esté al inicio de archivos CSS
- Revisar sintaxis de CSS

### Firebase no funciona

- Verificar configuración en `config.js`
- Revisar reglas de Firestore
- Comprobar conexión a internet

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.

## 👨‍💻 Autor

Desarrollado como proyecto de práctica de React y React Router.

---

**¡Gracias por usar Tabaquería Rodriguez!** 🚀
