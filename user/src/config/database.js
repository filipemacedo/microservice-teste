require('../utils/env-path');

const { env } = process;

module.exports = {
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  storage: "__tests__/database.sqlite",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
