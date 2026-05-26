# 📚 Biblioteca API

API RESTful para gestión de libros (CRUD completo) con Node.js, Express y MySQL.

## 🚀 Características

- CRUD completo (Create, Read, Update, Delete)
- API Key para endpoints protegidos
- Validaciones en capa de negocio
- Búsqueda por título/autor
- Arquitectura por capas (routes → controllers → models)

## 📋 Requisitos previos

- Node.js (v16+)
- MySQL

## 🛠️ Instalación

```bash
git clone https://github.com/Cathwe/biblioteca-api.git
cd biblioteca-api
npm install
```

## ⚙️ Configuración

Crear un archivo `.env` en la raíz del proyecto con las variables necesarias para la conexión a MySQL y configuración del servidor.

Luego importar el archivo `sql/database.sql` desde phpMyAdmin o MySQL.

Iniciar servidor:

```bash
npm run dev
```

## Endpoints

| Método | Ruta | Descripción | Auth requerida |
|--------|------|-------------|----------------|
| GET | /api/libros | Listar todos los libros | No |
| GET | /api/libros?nombre= | Buscar libros por nombre/título | No |
| GET | /api/libros/:id | Obtener libro por ID | No |
| POST | /api/libros | Crear nuevo libro | 🔒 API Key |
| PUT | /api/libros/:id | Actualizar libro | 🔒 API Key |
| DELETE | /api/libros/:id | Eliminar libro | 🔒 API Key |

## Seguridad

### API Key

Los endpoints POST, PUT y DELETE requieren el siguiente header:

```txt
x-api-key: eval-s12-2024
```

Si el header no se envía correctamente, el servidor responde con status 401 Unauthorized.

### HTTPS

HTTPS protege la comunicación entre cliente y servidor mediante cifrado.

Esto evita que terceros puedan leer o modificar los datos enviados por la red.

En producción es importante porque protege credenciales, cookies y datos sensibles.

## 📁 Estructura del proyecto

```txt
biblioteca-api/
├── db/
├── models/
├── controllers/
├── routes/
├── middlewares/
├── services/
├── public/
├── sql/
├── .env
└── server.js
```

## 👨‍💻 Autor

Camila Ávila Salas