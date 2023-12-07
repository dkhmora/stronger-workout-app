import { Dialect } from "sequelize";

interface Pool {
  max: number;
  min: number;
  acquire: number;
  idle: number;
}
interface DBConfig {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  port: number;
  dialect: Dialect;
  pool: Pool;
}

export default <DBConfig>{
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306", 10),
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
