# Prototipo Módulo de Operaciones - MUNIVALPO

Prototipo estático del Módulo de Operaciones para la Municipalidad de Valparaíso, diseñado para ser desplegado en GitHub Pages.

## 📋 Descripción

Este es un **prototipo funcional** que replica visualmente el módulo de operaciones del sistema MUNIVALPO, pero sin necesidad de backend o base de datos. Utiliza datos mock (simulados) para demostrar todas las funcionalidades.

## ✨ Características

### Páginas Implementadas

1. **Dashboard (`index.html`)**
   - Resumen de estadísticas por estado
   - Tabla con solicitudes recientes
   - Accesos rápidos a diferentes secciones

2. **Bandeja de Solicitudes (`bandeja/index.html`)**
   - Tabla completa con todas las solicitudes
   - Filtros avanzados (estado, etapa, departamento, fechas, texto)
   - Ordenamiento por columnas
   - Paginación
   - 12 solicitudes de ejemplo

3. **Detalle de Solicitud (`bandeja/detalle.html`)**
   - Vista completa de una solicitud
   - Información del solicitante, departamento y requerimiento
   - Timeline de derivaciones, validaciones y etapas
   - Archivos adjuntos
   - Mapa con ubicación GPS
   - **10 modales funcionales:**
     - ✏️ Editar Solicitud
     - ➡️ Derivar
     - ✅ Validar
     - 🔄 Cambiar Estado
     - 📋 Cambiar Etapa
     - 📎 Adjuntar Archivo
     - 🔄 Agregar Etapa
     - 📍 Ver Mapa
     - 📜 Ver Historial
     - 🗑️ Eliminar

4. **Mapa de Solicitudes (`mapa/index.html`)**
   - Visualización de todas las solicitudes en mapa interactivo
   - Marcadores con colores según estado
   - Clustering de marcadores
   - Filtros por estado y departamento
   - Popups con información y enlace al detalle

5. **Histórico (`historico/index.html`)**
   - Solicitudes finalizadas y rechazadas
   - Filtros por año y estado
   - Tiempo total de resolución

### Funcionalidades Principales

- ✅ **Tema Claro/Oscuro**: Toggle entre modo claro y oscuro
- ✅ **Diseño Responsive**: Funciona en desktop, tablet y móvil
- ✅ **Navegación Fluida**: Sidebar con navegación entre secciones
- ✅ **Datos Realistas**: 12 solicitudes mock con datos completos
- ✅ **Mapas Interactivos**: Integración con Leaflet.js
- ✅ **Filtrado Avanzado**: Múltiples criterios de búsqueda
- ✅ **Ordenamiento**: Por ID, fecha, estado, etapa
- ✅ **Paginación**: Navegación por páginas de resultados

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS para temas, Flexbox y Grid
- **JavaScript (ES6+)**: Lógica del cliente
- **Alpine.js 3.x**: Framework reactivo ligero
- **Tailwind CSS 3.x**: Framework CSS utility-first
- **Leaflet.js 1.9.4**: Mapas interactivos
- **Leaflet.markercluster**: Agrupación de marcadores

## 📁 Estructura del Proyecto

```
prototipo-modulo-operaciones/
├── index.html                  # Dashboard principal
├── bandeja/
│   ├── index.html             # Tabla de solicitudes
│   └── detalle.html           # Detalle con 10 modales
├── mapa/
│   └── index.html             # Vista de mapa
├── historico/
│   └── index.html             # Solicitudes históricas
├── css/
│   ├── theme-vars.css         # Variables de tema
│   └── custom.css             # Estilos personalizados
├── js/
│   ├── mock-data.js           # Datos simulados
│   ├── utils.js               # Funciones auxiliares
│   └── modals.js              # Sistema de modales
└── README.md                  # Este archivo
```

## 🚀 Instalación y Uso Local

### Opción 1: Servidor HTTP Simple (Python)

```bash
# Navegar a la carpeta del proyecto
cd prototipo-modulo-operaciones

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abrir en el navegador: `http://localhost:8000`

### Opción 2: Live Server (VS Code)

1. Instalar la extensión "Live Server" en VS Code
2. Hacer clic derecho en `index.html`
3. Seleccionar "Open with Live Server"

### Opción 3: Abrir Directamente

Simplemente abrir `index.html` en un navegador moderno (Chrome, Firefox, Edge, Safari).

⚠️ **Nota**: Algunas funcionalidades como el almacenamiento local pueden no funcionar correctamente al abrir directamente sin servidor HTTP.

## 🌐 Despliegue en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

```bash
# Inicializar repositorio Git
git init

# Agregar archivos
git add .

# Hacer commit
git commit -m "Initial commit: Prototipo Módulo Operaciones"

# Conectar con repositorio remoto
git remote add origin https://github.com/TU_USUARIO/prototipo-munivalpo.git

# Subir a GitHub
git push -u origin main
```

### Paso 2: Configurar GitHub Pages

1. Ir a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, seleccionar:
   - Branch: `main`
   - Folder: `/prototipo-modulo-operaciones` (o `/` si está en la raíz)
5. Click en **Save**
6. Esperar unos minutos

### Paso 3: Acceder al Sitio

Tu prototipo estará disponible en:
```
https://TU_USUARIO.github.io/prototipo-munivalpo/
```

## 📊 Datos Mock Incluidos

El prototipo incluye datos simulados para demostración:

- **12 Solicitudes** con diferentes estados y etapas
- **5 Departamentos** municipales
- **5 Ciudadanos** con RUT, email, teléfono
- **5 Funcionarios** responsables
- **5 Tipos de Requerimientos**
- **3 Derivaciones** entre departamentos
- **2 Validaciones** (aprobada y rechazada)
- **8 Tipos de Etapa**
- **6 Etapas** de proceso con archivos adjuntos

### Enumeraciones

- **EstadoSolicitud**: Recepcionado, EnProceso, Finalizado, Rechazado, Derivado
- **EtapaSolicitud**: Ingreso, Validacion, Supervision, Ejecucion, Cierre, Archivado
- **TipoIngreso**: Presencial, EnLinea, Telefonico
- **TipoUbicacion**: GPS, Direccion, SinUbicacion

## 🎨 Personalización

### Cambiar Colores del Tema

Editar `css/theme-vars.css`:

```css
:root {
  --color-primary: #2563eb;        /* Azul primario */
  --color-success: #10b981;        /* Verde éxito */
  --color-warning: #f59e0b;        /* Amarillo advertencia */
  --color-error: #ef4444;          /* Rojo error */
}
```

### Modificar Datos Mock

Editar `js/mock-data.js`:

```javascript
const mockData = {
  solicitudes: [
    {
      SolicitudId: 13,
      Descripcion: "Nueva solicitud...",
      // ... más campos
    }
  ]
};
```

## 🔧 Funciones Principales

### Utilidades (`js/utils.js`)

- `formatDate(date, includeTime)` - Formatea fechas al formato chileno
- `diasTranscurridos(fecha)` - Calcula días transcurridos
- `getEstadoNombre(estado)` - Obtiene nombre del estado
- `getEstadoClass(estado)` - Obtiene clase CSS del estado
- `formatRut(rut)` - Formatea RUT chileno (XX.XXX.XXX-X)
- `validarRut(rut)` - Valida RUT con dígito verificador
- `filtrarSolicitudes(solicitudes, filtros)` - Filtra solicitudes
- `calcularEstadisticas(solicitudes)` - Calcula estadísticas

### Sistema de Modales (`js/modals.js`)

```javascript
// Inicializar modal manager
const modalManager = new ModalManager();

// Registrar modal
modalManager.registrar('modal-id', {
  onAbrir: (datos) => { /* callback */ },
  onCerrar: () => { /* callback */ }
});

// Abrir modal
modalManager.abrir('modal-id', { datos });

// Cerrar modal
modalManager.cerrar('modal-id');
```

## 🗺️ Mapas

### Leaflet.js

Los mapas utilizan coordenadas GPS de Valparaíso:
- Centro: `-33.0472, -71.6127`
- Zoom: 13-16

### Personalizar Marcadores

En `mapa/index.html`, función `getMarkerIcon()`:

```javascript
const colores = {
  0: '#3b82f6',  // Recepcionado - Azul
  1: '#f59e0b',  // En Proceso - Amarillo
  2: '#10b981',  // Finalizado - Verde
  3: '#ef4444',  // Rechazado - Rojo
};
```

## 📱 Responsive Design

El prototipo es totalmente responsive:

- **Desktop** (>1024px): Sidebar fijo, tabla completa
- **Tablet** (768px - 1024px): Sidebar colapsable, grid adaptativo
- **Mobile** (<768px): Menú hamburguesa, cards verticales

## ⚡ Rendimiento

- **Sin backend**: Carga instantánea
- **CDNs**: Tailwind, Alpine.js y Leaflet desde CDN
- **Tamaño total**: ~100KB (sin contar CDNs)
- **Carga inicial**: <1 segundo

## 🔐 Seguridad

⚠️ **Importante**: Este es un **prototipo estático** para demostración.

**NO incluye:**
- Autenticación de usuarios
- Autorización por roles
- Validación de backend
- Protección contra XSS/CSRF
- Conexión a base de datos real

**NO usar en producción sin implementar seguridad adecuada.**

## 🐛 Limitaciones Conocidas

1. **Datos no persisten**: Al recargar la página, los cambios se pierden
2. **No hay validación de backend**: Todas las validaciones son del lado del cliente
3. **Acciones simuladas**: Los botones "Guardar" solo muestran notificaciones
4. **Archivos adjuntos**: No se pueden subir archivos reales
5. **Usuarios**: No hay sistema de autenticación real

## 🎯 Casos de Uso

Este prototipo es ideal para:

- ✅ **Demostración a stakeholders**: Mostrar el flujo completo del sistema
- ✅ **Pruebas de UX**: Validar interfaz y experiencia de usuario
- ✅ **Documentación visual**: Guía para desarrollo real
- ✅ **Capacitación**: Entrenar usuarios antes del sistema real
- ✅ **Evaluación de diseño**: Revisar colores, tipografía, espaciado

## 📞 Soporte

Para preguntas o problemas:

1. Revisar este README
2. Verificar la consola del navegador (F12)
3. Comprobar que todos los archivos estén presentes
4. Probar en un servidor HTTP local

## 📄 Licencia

Este es un prototipo para la Municipalidad de Valparaíso.

---

**Desarrollado para MUNIVALPO** | Versión 1.0.0 | Enero 2025
