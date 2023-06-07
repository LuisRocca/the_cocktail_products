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

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Imagen del microservidor 

Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para construir la imagen de Docker:
bash

```cmd
docker build -t mymicroservice .
```

Esto creará una imagen de Docker llamada mymicroservice basada en las instrucciones del Dockerfile. Asegúrate de incluir el punto . al final del comando para especificar que el Dockerfile se encuentra en el directorio actual.

Una vez que se haya creado la imagen de Docker, puedes ejecutar un contenedor basado en esa imagen con el siguiente comando:
bash

```cmd
docker run -p 3000:3000 mymicroservice
```

Esto ejecutará un contenedor a partir de la imagen mymicroservice y mapeará el puerto 3000 del contenedor al puerto 3000 de tu máquina local. Puedes cambiar el número de puerto si tu microservicio utiliza un puerto diferente.

Con estos pasos, deberías poder empaquetar tu microservicio en un contenedor Docker y ejecutarlo en cualquier entorno compatible con Docker.

## Documentacion del api

Este proyecto cuenta con una documentacion echa con Swagger UI gracias a que nest.js nos da la comodidad de contruir una excelente aplicacion MVC de manera muy rapida efectiva y operativa puedes visatarla en la ruta de /docs si lo estas carriendo localmente seguramente la ruta sera: http://localhost:3001/docs 

## Notas Adicional

quizás sea conveniente especificar que si quieren conectar la imagen de microservidor con la imagen de la base de datos es necesario no solo inyectarle las variables de entorno a la imagen si no que recordar que la imagen corre sobre su propio entorno asi que en la variable  host tiene que apuntar a la ip del pc
HOST=IP del Computador que corre la imagen de la db
deje el .env apuntando al localhost como si se corriera en ambiente de desarrollo pero por si algo dejo esta información para que sepan como ver corriendo el servidor con la coneccion a la db el comando por si no lo recuerdan es:
```cmd
 docker run --env-file=./.env -p 3001:3001 mymicroservice
 ```
 de esta manera ya queda todo en orden a la hora de correr el servicio en una imagen