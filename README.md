# Stronger Workout Web App

Stronger Workout App is an app I am building to try and replicate the Strong Workout Mobile App in a web setting, and possibly a PWA(Progressive Web App) in the future.

Front-end: React.js, Material UI
Back-end: MySQL, Express.js, Sequelize.js
Testing: Jest

Containers:
- Client
- Server
- phpMyAdmin
- MySQL

Future plans:
- Make it a Progressive Web App (PWA)
- Deploy to AWS ECS

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
