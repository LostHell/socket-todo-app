# socket-todo-app-nestjs-and-angular
*Please Remember that this is a hobby project and done in the freetime*

## Requirements
1. Docker

## How to run the Project & additional Docker Commands
1. Run all services: `docker compose up`

Additional Docker Commands:
1. Rebuild all Images (also run e.g. if you have a new dependency): `docker compose build --no-cache`
2. Run services with rebuild: `docker compose up -d --build api frontend postgres postgres_admin`
3. Remove all images: `docker rmi -f $(docker images -a -q)`
4. Remove all containers: `docker rm -vf $(docker ps -a -q)`
5. Remove all Volumes: `docker compose down -v`
6. Clear all `docker system prune -a --volumes`


## Troubleshooting
1. If your container says for backend: 'Can not find Module: "XXX"' then `cd  nestjs-backend` and `npm run build`

## Setup steps in detail

###
TODO: Health check with NestJS Terminus  
TODO: Health check with Terminus for Database

### Docker & Docker-Compose (Database)
1. Create a "docker-compose.yml" file at the top level of the project
2. Add a "postgres" database service, so that NestJS can connect to it
