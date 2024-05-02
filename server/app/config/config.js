require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_NAME || "database_development",
    host: process.env.DB_HOST || "127.0.0.1",
    port: parseInt(process.env.DB_PORT || "3306", 10),
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: process.env.DB_USER || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_NAME || "database_development",
    port: parseInt(process.env.DB_PORT || "3306", 10),
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Note: This might be necessary depending on your database's SSL configuration
      },
    },
  },
};
