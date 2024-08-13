
# Login con React Native y Expo

Este proyecto es una aplicación móvil de login desarrollada con React Native y Expo. La aplicación consume una API para autenticación de usuarios, que se encuentra en el repositorio api-eventos.


## Características

- **Registro de usuarios:** Permite registrar nuevos usuarios en la API.
- **Inicio de sesión:** Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña.
- **Validación de token:** Después de iniciar sesión, se valida el token JWT recibido desde la API.
- **Gestión de estado:** El estado de autenticación del usuario se gestiona de manera eficiente.
## Instalación

Clona el repositorio de la API de eventos:

```bash
git clone https://github.com/chulusca/api-eventos
cd api-eventos
npm install
npm start
```
**Segui las instrucciones de instalacion de [API-EVENTOS](https://github.com/chulusca/api-eventos)**

Clona este repositorio:
```bash
git clone https://github.com/Chulusca/ReactExpo-Login.git
cd ReactExpo-Login
npm install
```
Configura la URL de la API en tu proyecto de React Native:

**En el archivo services/User.js o donde manejes las solicitudes a la API, asegúrate de configurar correctamente la URL base de la API:**

```bash
const API_URL = 'http://<TU_IP_LOCAL>:3001';
```
Inicia el proyecto con Expo:
```bash
npx expo start --tunnel
```




## Contribución

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio, crear una nueva rama con tus cambios y enviar un pull request.

## Autores

- [@chulusca](https://www.github.com/chulusca)
- [@lkoziupa06](https://www.github.com/lkoziupa06)
- [@palachii](https://www.github.com/palachii)

