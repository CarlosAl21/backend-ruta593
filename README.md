# Backend Ruta593

## Descripción del proyecto
Backend para la aplicación Ruta593: API RESTful construida con Node.js para gestionar rutas, usuarios y recursos asociados. Provee endpoints para creación, lectura, actualización y eliminación, autenticación y lógica de negocio necesaria para la aplicación cliente.

## Estructura de carpetas
Estructura orientativa del proyecto:
- /src
  - /controllers  -> Lógica de controladores (endpoints)
  - /models       -> Esquemas y modelos de datos
  - /routes       -> Definición de rutas y middlewares de rutas
  - /services     -> Lógica de negocio y utilidades
  - /config       -> Configuración (DB, variables de entorno)
  - /middlewares  -> Middlewares personalizados (autenticación, errores)
  - /utils        -> Utilidades generales
- /tests          -> Pruebas unitarias/e2e
- /migrations     -> Scripts de migración (si aplica)
- .env            -> Variables de entorno (no subir a VCS)
- package.json
- README.md

(Ajustar según la estructura real del repositorio)

## Requisitos previos
- Node.js (recomendado >= 14)
- npm o yarn
- MongoDB u otra base de datos según configuración (revisar `config`)

## Instalación
1. Clonar el repositorio:
   git clone <repo-url>
2. Entrar al directorio:
   cd backend-ruta593
3. Instalar dependencias:
   npm install
   (o `yarn install`)

4. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz con las variables necesarias (por ejemplo: PORT, MONGODB_URI, JWT_SECRET). Revisar `src/config` o `.env.example` si existe.

## Dependencias comunes
(Revisar package.json para versiones exactas)
- express — framework HTTP
- mongoose — ODM para MongoDB (si aplica)
- dotenv — carga variables de entorno
- cors — manejo de CORS
- bcrypt / bcryptjs — hashing de contraseñas
- jsonwebtoken — autenticación basada en JWT
- nodemon (dev) — reinicio automático en desarrollo
- jest / mocha / supertest (dev) — pruebas

## Ejecución
- Modo desarrollo:
  npm run dev
  (suele usar nodemon; revisar `package.json` scripts)

- Modo producción:
  npm start

- Ejecutar pruebas:
  npm test

## Notas
- Revisar `package.json` y `src/config` para scripts, puertos y configuración específica.
- No incluir el archivo `.env` en el control de versiones.
- Añadir instrucciones adicionales específicas del proyecto (migraciones, seeds, permisos) según sea necesario.
