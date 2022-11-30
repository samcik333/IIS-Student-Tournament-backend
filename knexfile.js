// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
		client: "pg",
		connection: {
			database: process.env.DATABASE_NAME || "postgres",
			user: process.env.POSTGRES_USER || "postgres",
			password: process.env.POSTGRES_PASSWORD || "password",
			port: process.env.POSTGRES_PORT || 5432,
			host: process.env.POSTGRES_HOST || "localhost",
			ssl: false,
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
		ssl: false,
		migrations: {
			directory: "./src/migrations/prod",
		},
		seeds: {
			directory: "./src/seeds/prod",
		},
		pool: {
			min: 2,
			max: 10,
		},
	},

};
