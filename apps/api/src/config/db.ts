import { Sequelize } from "sequelize";
import type { Dialect } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const connect = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
};
