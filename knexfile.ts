export = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME || "postgres",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "password",
      port: process.env.POSTGRES_PORT || 5432,
      host: process.env.POSTGRES_HOST || "localhost",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    ssl: {
      rejectUnauthorized: false, // This line will fix new error
    },
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
      rejectUnauthorized: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
