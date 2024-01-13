# Mati Infante - Pesca y Aventura
[!NOTE]
E-commerce de productos de pesca

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

### 1. Clona el repositorio:

```bash
git clone https://github.com/NaidixCoder/pf-react

```

### 2. Instala React + Vite
```bash
npm create vite@latest .
```

### 3. Instala dependencias.
```bash
npm install react-route-dom@6
```
```bash
npm install react-spinners
```
```bash
npm install react-hook-form
```

```bash
npm install firebase
```

### 3. Instala librerias adicionales

#### Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
```

#### React icons
```bash
npm i react-icons
```

#### Sweet Alert2
```bash
npm install sweetalert2
```

## Uso

### Funcionalidades Principales
1 - Filtrar productos por categoria.
2 - Seleccionar un producto y ver los detalles del mismo.
3 - Elegir la o las cantidades del producto para agregarlo al carrito.
4 - Componente carrito con el listado de los productos cargados al mismo.
5 - Formulario para finalizar la compra.
6 - Opcion de vaciar el carrito. Con ventana modal para confirmar o denegar.
7 - Opcion de eliminar un producto del carrito. Con ventana modal para confirmar o denegar.

## Tecnologías Utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Firebase](https://firebase.google.com/): Plataforma de desarrollo de aplicaciones móviles y web.
- [Tailwind CSS](https://tailwindcss.com/): Framework de diseño CSS utilizable con JavaScript.
- [React Router](https://reactrouter.com/): Enrutador para aplicaciones React.
- [SweetAlert2](https://sweetalert2.github.io/): Biblioteca para mostrar mensajes de alerta atractivos.
- [React Icons](https://react-icons.github.io/react-icons/): Librería que proporciona íconos para tu aplicación React.
- [React Hook Form](https://react-hook-form.com/): Librería para gestionar formularios en React.
- [Firebase](https://firebase.google.com/): Herramientas y servicios de desarrollo de aplicaciones web de Google.

Estas tecnologías han sido seleccionadas para proporcionar una experiencia de usuario eficiente y escalable en nuestra aplicación.


# Configuración de Variables de Entorno

Este proyecto utiliza Firebase para ciertas funcionalidades. Asegúrate de configurar las variables de entorno necesarias antes de ejecutar la aplicación.

## Configuracion de Firebase

Este proyecto también utiliza Firebase para ciertas funcionalidades. Aquí están las variables de entorno requeridas para la configuración de Firebase:

- `VITE_APP_FIREBASE_API_KEY`: Clave de API de Firebase.
- `VITE_APP_FIREBASE_AUTH_DOMAIN`: Dominio de autenticación de Firebase.
- `VITE_APP_FIREBASE_PROJECT_ID`: ID del proyecto de Firebase.
- `VITE_APP_FIREBASE_STORAGE_BUCKET`: Bucket de almacenamiento de Firebase.
- `VITE_APP_FIREBASE_MESSAGING_SENDER_ID`: ID del remitente de mensajería de Firebase.
- `VITE_APP_FIREBASE_APP_ID`: ID de la aplicación de Firebase.

Asegúrate de crear un archivo `.env` en la raíz del proyecto y proporcionar los valores adecuados para estas variables.

```env
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
VITE_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_FIREBASE_APP_ID=your_firebase_app_id
```

## Autor

Matias Infante - FrontEnd Developer

- [@NaidixCoder](https://www.github.com/https://github.com/NaidixCoder)

