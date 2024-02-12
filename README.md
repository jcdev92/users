<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

**USER RESTFULL API**
  - CRUD de usuarios con autenticacion, autorizacion basado en roles y permisos.
  - Ademas tiene una entidad de paises asignables a los usuarios.

**INFO:**

  - Desarrollo:
    - Por motivos de practicidad y funcionamiento de la api, al iniciar la aplicacion se crean por defecto unos permisos estaticos y unos roles al igual que un usuario admin.
    - Hay rutas protegidas que requieren del permiso "administrator", este permiso por ejemplo lo tiene el rol admin que se crea junto al user admin al iniciar la api... el usuario admin ya tendra en su rol "admin" el permiso "administrator" por defecto... tu mismo indicaras cuales seran las credenciales del admin en el archivo .env como variables de entorno... con las cuales accederas como tal.
    - Cabe mencionar que en en el archivo ".env.template" se encuentran las respectivas variables de entorno de el usuario admin, los permisos y los roles que se crearan y enlazaran entre si al iniciar el servidor.
    - Recuerda llenar las variables de entorno en el .env.template y luego renombrarlo a .env para que corran las variables de entorno.


**REQUISITOS:**
  - En modo desarrollo:
    - Tener instalado postgreSQL en tu computadora. Y la base de datos creada.
    (NOTA: En un futuro proximo esta api podra correrse desde un contenedor docker... mientras tanto en desarrollo usar tu db de postrgeSQL que se encuentre en tu sistema operativo.)
    - Obviamente tener node js instalado.
    - De preferencia uso pnpm.


**DOCUMENTACION OPENAPI / RUTAS:**

  **Development:**
  - http://localhost:3000/api

  **Deployment:**
  - https://users-api-mutr.onrender.com/api

  - A manera de testeo de la api desplegada en onrender y sus rutas... dejo las credenciales del user admin.
  credenciales para usar el admin user con role admin y todos los permisos en el:
    - user: admin
    - pass: Admin1234
  - Una vez logeado... con el token de dicho usuario podras acceder a todas las rutas protegidas ya que este usuario tiene un rol admin con todos los permisos.
  - Con este usuario podras crear actualizar y emilinar roles, paises y usuarios.
  - Cuidado con quitarle permisos a si mismo por que habria que reiniciar la base de datos ya que no podra asignarse nuevamente permisos asi mismo  si pierde el permiso 'administrator' por ejemplo.
  - Tambien puedes crear un usuario nuevo el cual solo tendra permiso de lectura por defecto y verificar a que rutas puede hacer consultas.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
