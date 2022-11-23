export = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME || "postgres",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "password",
      port: process.env.POSTGRES_PORT || 5432,
      host: process.env.POSTGRES_HOST || "localhost",
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
    connection: {
      database: process.env.DATABASE_NAME || "d4mvrd2rol6mkb",
      user: process.env.POSTGRES_USER || "klazldwbxlxrra",
      password:
        process.env.POSTGRES_PASSWORD ||
        "52b8ebebbd910de17b0855c84e685952aa0e1048e3f79880659b6d16d2f7de39",
      port: process.env.POSTGRES_PORT || 5432,
      host:
        process.env.POSTGRES_HOST ||
        "ec2-63-32-248-14.eu-west-1.compute.amazonaws.com",
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
