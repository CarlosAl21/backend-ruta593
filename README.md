# 🚌 Sistema de Gestión de Buses - Ruta593

Sistema completo de gestión de transporte público desarrollado con **NestJS** que permite la administración integral de cooperativas de buses, incluyendo reservas, pagos, gestión de flota y generación de documentación.

## 📋 Descripción del Proyecto

Este proyecto es una **API REST** robusta para la gestión completa de una cooperativa de transporte público. El sistema maneja desde la administración de usuarios y buses hasta la generación de boletos y facturas, incluyendo un sistema de pagos integrado y notificaciones por email.

### 🎯 Características Principales

- 🔐 **Autenticación y Autorización** con JWT y roles
- 👥 **Gestión de Usuarios** (administradores, clientes, cooperativas)
- 🚌 **Gestión de Flota** (buses, asientos, estructuras)
- 🛣️ **Gestión de Rutas** (paradas, frecuencias, viajes)
- 🎫 **Sistema de Reservas** con asignación de asientos
- 💳 **Múltiples Métodos de Pago** (PayPal, Depósito, Presencial)
- 📄 **Generación de Documentos** (boletos, facturas, códigos QR)
- 📧 **Notificaciones por Email** (confirmaciones, cancelaciones)
- ☁️ **Almacenamiento en la Nube** (Cloudinary para imágenes y PDFs)
- 📚 **Documentación API** con Swagger
- 🧪 **Sistema de Pruebas** integrado

## 🏗️ Estructura de Carpetas

```
backend-ruta593-develop/
├── 📁 src/
│   ├── 📁 administradores/          # Gestión de administradores del sistema
│   ├── 📁 asientos/                 # Gestión de asientos de buses
│   ├── 📁 auth/                     # Autenticación y autorización
│   │   ├── 📁 decorators/           # Decoradores personalizados
│   │   ├── 📁 dto/                  # Data Transfer Objects
│   │   └── 📁 guards/               # Guards de seguridad
│   ├── 📁 boletos/                  # Generación y gestión de boletos
│   ├── 📁 buses/                    # Gestión de flota de buses
│   ├── 📁 buses-fotos/              # Gestión de fotos de buses
│   ├── 📁 ciudades/                 # Gestión de ciudades
│   ├── 📁 clientes/                 # Gestión de clientes
│   ├── 📁 clientes_cooperativas/    # Gestión de clientes por cooperativa
│   ├── 📁 cloudinary/               # Integración con Cloudinary
│   ├── 📁 common/                   # Utilidades compartidas
│   │   ├── 📁 decorators/           # Decoradores comunes
│   │   ├── 📁 enums/                # Enumeraciones del sistema
│   │   ├── 📁 interfaces/           # Interfaces TypeScript
│   │   ├── 📁 seeds/                # Datos iniciales
│   │   └── 📁 utils/                # Utilidades generales
│   ├── 📁 comprobantes_pagos/       # Gestión de comprobantes
│   ├── 📁 cooperativa/              # Gestión de cooperativas
│   ├── 📁 descuentos/               # Sistema de descuentos
│   ├── 📁 estacion_cooperativa/     # Gestión de estaciones
│   ├── 📁 estado_asientos/          # Estados de asientos
│   ├── 📁 estructura_buses/         # Estructuras de buses
│   ├── 📁 factura/                  # Generación de facturas
│   ├── 📁 frecuencias/              # Gestión de frecuencias
│   ├── 📁 mail/                     # Sistema de emails
│   │   └── 📁 templates/            # Plantillas de email
│   ├── 📁 metodos_pago/             # Métodos de pago disponibles
│   ├── 📁 pagos/                    # Gestión de pagos
│   ├── 📁 paradas/                  # Gestión de paradas
│   ├── 📁 paradas_intermedias/      # Paradas intermedias
│   ├── 📁 provincias/               # Gestión de provincias
│   ├── 📁 reserva/                  # Sistema de reservas
│   ├── 📁 roles/                    # Gestión de roles
│   ├── 📁 rutas/                    # Gestión de rutas
│   ├── 📁 serial_estacion/          # Seriales de estaciones
│   ├── 📁 terminales/               # Gestión de terminales
│   ├── 📁 tipos_asientos/           # Tipos de asientos
│   ├── 📁 user/                     # Gestión de usuarios
│   ├── 📁 utils/                    # Utilidades adicionales
│   ├── 📁 viajes/                   # Gestión de viajes
│   ├── 📄 app.controller.ts         # Controlador principal
│   ├── 📄 app.module.ts             # Módulo principal
│   ├── 📄 app.service.ts            # Servicio principal
│   └── 📄 main.ts                   # Punto de entrada
├── 📁 test/                         # Pruebas unitarias
├── 📁 tests/                        # Archivos de prueba HTTP
├── 📁 uploads/                      # Archivos subidos temporalmente
├── 📄 .prettierrc                   # Configuración de Prettier
├── 📄 package.json                  # Dependencias y scripts
├── 📄 tsconfig.json                 # Configuración TypeScript
└── 📄 README.md                     # Este archivo
```

## 🚀 Instalación

### Prerrequisitos

- **Node.js** (v20 o superior)
- **pnpm** (gestor de paquetes)
- **Base de datos** (MySQL/PostgreSQL)
- **Cuenta en Cloudinary** (para almacenamiento de archivos)

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd backend-ruta593-develop
```

### 2. Instalar pnpm (si no está instalado)

```bash
# Usando npm
npm install -g pnpm

# Usando PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex

# Verificar instalación
pnpm --version
```

### 3. Instalar Dependencias

```bash
pnpm install
```

### 4. Configurar Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Configuración de Base de Datos
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=bd_buses
DB_SCHEMA=public

# Configuración JWT
JWT_SECRET=tu_clave_secreta_jwt_super_segura

# Configuración de Email
MAIL_HOST=smtp.gmail.com
MAIL_USER=tu_email@gmail.com
MAIL_PASSWORD=tu_app_password
MAIL_FROM=tu_email@gmail.com

# Configuración Cloudinary
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

# Configuración del Servidor
PORT=3000
NODE_ENV=development
```

### 5. Configurar Base de Datos

1. Crear la base de datos:
```sql
CREATE DATABASE bd_buses;
```

2. El sistema creará automáticamente las tablas al iniciar (synchronize: true)

## 📦 Dependencias

### Dependencias Principales

| Dependencia | Versión | Descripción |
|-------------|---------|-------------|
| `@nestjs/common` | ^10.0.0 | Framework NestJS |
| `@nestjs/typeorm` | 10.0.2 | ORM para base de datos |
| `@nestjs/jwt` | 10.2.0 | Autenticación JWT |
| `@nestjs/swagger` | ^8.1.1 | Documentación API |
| `typeorm` | 0.3.20 | ORM principal |
| `mysql2` | 3.11.4 | Driver MySQL |
| `bcryptjs` | ^2.4.3 | Encriptación de contraseñas |
| `class-validator` | ^0.14.1 | Validación de datos |
| `cloudinary` | ^2.5.1 | Almacenamiento en la nube |
| `nodemailer` | ^6.9.16 | Envío de emails |
| `pdfkit` | ^0.16.0 | Generación de PDFs |
| `qrcode` | ^1.5.4 | Generación de códigos QR |

### Dependencias de Desarrollo

| Dependencia | Versión | Descripción |
|-------------|---------|-------------|
| `@nestjs/cli` | ^10.0.0 | CLI de NestJS |
| `@types/node` | ^20.3.1 | Tipos de Node.js |
| `typescript` | ^5.1.3 | Compilador TypeScript |
| `prettier` | ^3.0.0 | Formateador de código |
| `eslint` | ^8.0.0 | Linter de código |
| `jest` | ^29.5.0 | Framework de pruebas |

## 🏃‍♂️ Ejecución

### Comandos Disponibles

```bash
# Desarrollo
pnpm run start:dev          # Servidor con hot reload
pnpm run start:debug        # Servidor en modo debug

# Producción
pnpm run build              # Compilar el proyecto
pnpm run start:prod         # Ejecutar en producción
pnpm run start              # Ejecutar normalmente

# Formateo y Linting
pnpm run format             # Formatear código con Prettier
pnpm run lint               # Ejecutar ESLint

# Pruebas
pnpm run test               # Ejecutar pruebas unitarias
pnpm run test:watch         # Pruebas en modo watch
pnpm run test:cov           # Pruebas con cobertura
pnpm run test:e2e           # Pruebas end-to-end
```

### Iniciar el Servidor

```bash
# Desarrollo (recomendado para desarrollo)
pnpm run start:dev

# El servidor estará disponible en: http://localhost:3000
# Documentación Swagger: http://localhost:3000/api/docs
```

## 📚 Documentación API

Una vez iniciado el servidor, puedes acceder a la documentación interactiva de la API:

- **Swagger UI**: http://localhost:3000/api/docs
- **Endpoints base**: http://localhost:3000/api

### Endpoints Principales

- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registro de usuarios
- `GET /api/boletos` - Listar boletos
- `POST /api/reserva` - Crear reserva
- `GET /api/buses` - Listar buses
- `GET /api/rutas` - Listar rutas

## 🧪 Pruebas

El proyecto incluye archivos de prueba en la carpeta `tests/` que pueden ser ejecutados con:

- **REST Client** (VS Code extension)
- **Postman**
- **Thunder Client**

### Ejecutar Pruebas Automatizadas

```bash
# Pruebas unitarias
pnpm run test

# Pruebas con cobertura
pnpm run test:cov

# Pruebas end-to-end
pnpm run test:e2e
```

## 🔧 Configuración Adicional

### Prettier

El proyecto incluye configuración de Prettier en `.prettierrc`:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

### TypeScript

Configuración optimizada para NestJS en `tsconfig.json` y `tsconfig.build.json`.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autores

**Carlos Alvarado - Marco Montesdeoca** - [GitHub](https://github.com/CarlosAl21/backend-ruta593)

## 🙏 Agradecimientos

- Universidad Técnica de Ambato
- Docentes del proyecto
- Comunidad NestJS

---

⭐ Si este proyecto te ha sido útil, ¡dale una estrella al repositorio!
