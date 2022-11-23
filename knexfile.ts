export = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
