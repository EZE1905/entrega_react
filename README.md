# E-commerce React con Vite

Este es un proyecto de e-commerce desarrollado con React y Vite. Incluye funcionalidades básicas como la gestión de un carrito de compras, la visualización de productos y la finalización de compras.

## Características

- **Desarrollo rápido**: Utiliza Vite para una experiencia de desarrollo rápida y eficiente.
- **Gestión de carrito**: Añade, elimina y vacía productos del carrito.
- **Finalización de compra**: Permite a los usuarios completar su compra y registrar pedidos.
- **Integración con Firebase**: Usa Firestore para almacenar y gestionar pedidos.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) (opcional, si prefieres usar yarn)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Navega al directorio del proyecto:
   cd tu-repositorio
3. Instala las dependencias:
   npm install
4. Configura Firebase:
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-auth-domain
VITE_FIREBASE_PROJECT_ID=tu-project-id
VITE_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu-messaging-sender-id
VITE_FIREBASE_APP_ID=tu-app-id

5. Inicia el servidor de desarrollo:
   npm run dev


Scripts

npm run dev: Inicia el servidor de desarrollo.
npm run build: Crea una versión optimizada para producción.
npm run preview: Previsualiza la versión de producción localmente.

Estructura del Proyecto

/src: Contiene el código fuente del proyecto.
     /componentes: Componentes React de la aplicación.
     /context: Contextos React para gestión de estado global.
     /firebaseConfig.js: Configuración de Firebase.
     /styles: Archivos de estilo CSS.
     /views: Vistas principales de la aplicación.
/public: Archivos estáticos, como imágenes.
index.html: Archivo HTML principal.
vite.config.js: Configuración de Vite.

Contribuciones

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Fork el repositorio.
2. Crea una rama nueva para tus cambios (git checkout -b mi-nueva-funcionalidad).
3. Haz tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Push a la rama (git push origin mi-nueva-funcionalidad).
5. Crea un Pull Request.

Licencia

Este proyecto está licenciado bajo la Licencia MIT.

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
