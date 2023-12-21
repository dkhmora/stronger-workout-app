# Stronger Workout Web App

Stronger Workout App is a web app which tries to replicate the Strong Workout Mobile App in a web app setting.

Front-end: React, Material UI, Tailwind CSS
Back-end: MySQL, Express, Sequelize

The client, server, and the MySQL database are all containerized using docker. A phpMyAdmin container is configured for manual database management.

Future plans:
- Deploy to AWS ECS
- Configure for usage as a Progressive Web App

## Build Setup

1. Create a `.env` file in the root of the project with the following content. Please change "MYSQLDB_ROOT_PASSWORD" to whatever you like:

```plaintext
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=<your_mysqlpassword>
MYSQLDB_DATABASE=stronger_db
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080

CLIENT_ORIGIN=http://127.0.0.1:3000,http://localhost:3000
CLIENT_API_BASE_URL=http://127.0.0.1:6868/api

REACT_LOCAL_PORT=3000
REACT_DOCKER_PORT=3000
WATCHPACK_POLLING=true
```

2. Start docker container.

```bash
$ docker compose up
```
