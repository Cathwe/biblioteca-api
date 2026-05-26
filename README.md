markdown
# 📚 Biblioteca API

API RESTful para gestión de libros (CRUD completo) con Node.js, Express y MySQL.

## 🚀 Características

- CRUD completo (Create, Read, Update, Delete)
- Autenticación por sesión (cookie)
- Validaciones en capa de negocio
- Búsqueda por título/autor
- Códigos de estado HTTP correctos
- Arquitectura por capas (routes → controllers → models)

## 📋 Requisitos previos

- Node.js (v16+)
- MySQL (XAMPP / WAMP / independiente)

## 🛠️ Instalación

``` 
git clone https://github.com/tu-usuario/biblioteca-api.git
cd biblioteca-api
npm install
⚙️ Configuración
1.	Crear archivo .env:
 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=biblioteca_db
PORT=3000
SESSION_SECRET=mi_secreto_seguro
2.	Ejecutar script SQL (phpMyAdmin o terminal)
3.	Iniciar servidor:
 
npm run dev
📡 Endpoints de la API
Método	Ruta	Descripción	Requiere login
GET	/api/libros	Listar todos los libros	❌
GET	/api/libros?buscar= o	Buscar libros	❌
GET	/api/libros/:id	Obtener libro por ID	❌
POST	/api/libros	Crear nuevo libro	✅
PUT	/api/libros/:id	Actualizar libro	✅
DELETE	/api/libros/:id	Eliminar libro	✅
POST	/login	Iniciar sesión	❌
POST	/logout	Cerrar sesión	✅

🧪 Ejemplos de uso
Login
 
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"usuario":"admin","password":"123"}'
Crear libro
 
curl -X POST http://localhost:3000/api/libros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"El Alquimista","autor":"Paulo Coelho","anio_publicacion":1988,"genero":"Ficción"}'
📁 Estructura del proyecto
 
biblioteca-api/
├── db/           - Conexión a MySQL
├── models/       - Consultas SQL
├── controllers/  - Lógica de negocio y validaciones
├── routes/       - Definición de rutas
├── middlewares/  - Autenticación y logging
├── public/       - Frontend (HTML/CSS/JS)
├── .env          - Variables de entorno
└── server.js     - Punto de entrada

👨‍💻 Autor
[Camila Ávila Salas]
