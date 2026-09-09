# Locaciones

Estructura base del proyecto. Backend Node.js + Express + MongoDB (Mongoose), frontend Vue 3 (Options API) + Vite + Bootstrap 5, autenticacion con JWT.

## Estructura

```
locaciones/
  backend/     API REST (Express, Mongoose, JWT) - puerto 4000
  frontend/    Cliente Vue 3 + Vite - puerto 3000
  .env         Configuracion compartida (no se versiona)
  .env.example Plantilla de variables de entorno
```

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior y npm (verifica con `node -v` y `npm -v`).
- Una base de datos MongoDB (Atlas en la nube o instancia local) y su cadena de conexion.
- Visual Studio Code (opcional, para correr el proyecto con F5).

## 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd locaciones
```

## 2. Instalar dependencias

Instala las dependencias de la raiz, del backend y del frontend con un solo comando:

```bash
npm run install-all
```

Esto ejecuta internamente `npm install` en `/`, `/backend` y `/frontend`.

## 3. Configurar el archivo `.env`

El proyecto usa un unico `.env` en la raiz (compartido por backend y frontend).

1. Copia la plantilla:

   ```bash
   cp .env.example .env
   ```

2. Abre `.env` y llena los valores:

   | Variable         | Obligatoria | Descripcion                                                                 |
   | ---------------- | :---------: | ---------------------------------------------------------------------------- |
   | `MONGODB_URI`     | Si          | Cadena de conexion a tu base de datos MongoDB.                               |
   | `PORT`            | No (4000)   | Puerto donde corre el backend.                                               |
   | `JWT_SECRET`      | Si          | Cadena larga y aleatoria usada para firmar los JWT.                          |
   | `JWT_EXPIRES_IN`  | No (1d)     | Vigencia del token, ej. `1d`, `12h`, `30m`.                                  |
   | `VITE_API_URL`    | Si          | URL base que usa el frontend para llamar al backend, ej. `http://localhost:4000/api`. |
   | `CORS_ORIGIN`     | No          | Origen permitido por CORS. Si se omite, el backend acepta cualquier `http://localhost:<puerto>`. |

   Para generar un `JWT_SECRET` aleatorio puedes correr:

   ```bash
   node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
   ```

Sin `MONGODB_URI` el backend no arranca, y sin `JWT_SECRET`/`VITE_API_URL` el login y registro fallan.

## 4. Correr el proyecto

### Opcion A: Todo junto (backend + frontend)

Desde la raiz del proyecto:

```bash
npm run dev
```

Levanta backend y frontend en paralelo (usa `concurrently`). Veras la salida de ambos procesos en la misma terminal, prefijada con `[0]` (backend) y `[1]` (frontend).

### Opcion B: Backend y frontend por separado

En dos terminales distintas:

```bash
# Terminal 1 - backend (con recarga automatica via nodemon)
npm run dev:backend
```

```bash
# Terminal 2 - frontend (servidor de desarrollo de Vite)
npm run dev:frontend
```

También puedes entrar a cada carpeta y usar sus scripts propios:

```bash
cd backend && npm run dev     # o: npm start (sin recarga automatica)
cd frontend && npm run dev
```

### Opcion C: Con F5 en VSCode

El proyecto ya incluye configuracion en `.vscode/launch.json`:

1. Abre la carpeta del proyecto en VSCode.
2. Presiona **F5** (o ve a la pestaña "Run and Debug" y dale ejecutar).
3. Se abre una terminal integrada corriendo `npm run dev` (backend + frontend) y, cuando Vite este listo, VSCode abre el navegador automaticamente en `http://localhost:3000`.

No hace falta elegir nada mas: **"Run Project (backend + frontend)"** es la configuracion por defecto. Tambien existen configuraciones adicionales por si necesitas poner breakpoints en un solo lado:

- `Backend only (debug)` - corre solo `backend/server.js` con el debugger de Node.
- `Frontend only (debug)` - corre solo el servidor de Vite.
- `Backend + Frontend (separate debug sessions)` - compound que lanza ambas anteriores a la vez, cada una en su propia sesion de debug.

Para elegir una config distinta a la de por defecto: pestaña "Run and Debug" (Ctrl+Shift+D) -> selecciona la opcion en el dropdown de arriba -> F5.

### URLs una vez corriendo

- Backend: `http://localhost:4000` (o el `PORT` que hayas configurado)
- Frontend: `http://localhost:3000` (puerto fijo; si esta ocupado, Vite falla en vez de cambiar de puerto)

## Scripts disponibles

Desde la raiz:

- `npm run install-all` - instala dependencias de raiz, backend y frontend
- `npm run dev` - levanta backend y frontend en paralelo
- `npm run dev:backend` - levanta solo el backend
- `npm run dev:frontend` - levanta solo el frontend
- `npm run build` - genera el build de produccion del frontend

## Funcionalidad de prueba incluida

- Registro (`POST /api/auth/register`) y login (`POST /api/auth/login`) que devuelven un JWT.
- Middleware de verificacion de token para proteger rutas.
- Vista protegida de ejemplo en el frontend (`/protegido`) que consume una ruta protegida del backend.

Esta base no incluye logica de negocio de "locaciones"; el equipo debe construirla sobre esta estructura.

## Problemas comunes

- **`Error: listen EADDRINUSE`**: ya hay un proceso usando el puerto 4000 o 3000. Cierra ese proceso o cambia `PORT` en `.env` (backend) / `server.port` en `frontend/vite.config.js` (frontend).
- **`secretOrPrivateKey must have a value`** al hacer login/registro: falta `JWT_SECRET` en `.env`.
- **El frontend no puede llamar al backend / errores de red en la consola**: revisa que `VITE_API_URL` en `.env` apunte al puerto correcto del backend.
- **Error de CORS**: define `CORS_ORIGIN` en `.env` con la URL exacta del frontend, o dejalo sin definir para que se acepte cualquier `localhost`.
