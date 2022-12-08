/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema
    .createTable("users", (table) => {
        table.increments("id").primary().unique();
        table.string("name").notNullable();
        table.string("lastname").notNullable();
        table.string("username", 10).notNullable().unique();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();
        table.enum("role", ["user", "admin"]);
        table.string("photo");
        table.integer("gold");
        table.integer("silver");
        table.integer("bronze");
        table.integer("numberOfGames");
        table.integer("numberOfWins");
    })
    .createTable("teams", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("ownerId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table.string("name").notNullable().unique();
        table.integer("capacity").notNullable();
        table.integer("numberOfPlayers").notNullable();
        table.string("logo");
        table.integer("gold");
        table.integer("silver");
        table.integer("bronze");
        table.integer("numberOfGames");
        table.integer("numberOfWins");
    })
    .createTable("tournaments", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("ownerId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table.string("name").notNullable();
        table.string("place").notNullable();
        table.datetime("date").notNullable();
        table.integer("mode").notNullable();
        table.integer("capacity").notNullable();
        table.integer("numberOfPlayers").notNullable();
        table.string("logo");
        table.enum("state", ["waiting", "open", "closed"]);
        table.string("description");
    })
    .createTable("matches", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("tournamentId")
            .unsigned()
            .references("id")
            .inTable("tournaments")
            .onDelete("CASCADE")
            .index();
        table.datetime("date").notNullable();
        table.integer("firstScore");
        table.integer("secondScore");
        table.integer("firstTeam");
        table.integer("secondTeam");
        table.integer("order");
    })
    .createTable("users-teams-matches", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("matchId")
            .unsigned()
            .references("id")
            .inTable("matches")
            .onDelete("CASCADE")
            .index();
        table
            .integer("teamId")
            .unsigned()
            .references("id")
            .inTable("teams")
            .onDelete("CASCADE")
            .index();
        table
            .integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
    })
    .createTable("users-teams", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table
            .integer("teamId")
            .unsigned()
            .references("id")
            .inTable("teams")
            .onDelete("CASCADE")
            .index();
    })
    .createTable("bracket", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("tournamentId")
            .unsigned()
            .references("id")
            .inTable("tournaments")
            .onDelete("CASCADE")
            .index();
        table.specificType("final", "text [1]");
        table.specificType("bronze", "text [1]");
        table.specificType("semifinals", "text [2]");
        table.specificType("eightfinals", "text [8]");
        table.specificType("quarterfinals", "text [4]");
    })
    .createTable("users-tournaments-teams", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table
            .integer("tournamentId")
            .unsigned()
            .references("id")
            .inTable("tournaments")
            .onDelete("CASCADE")
            .index();
        table
            .integer("teamId")
            .unsigned()
            .references("id")
            .inTable("teams")
            .onDelete("CASCADE")
            .index();
    })
    .createTable("likedTournaments", (table) => {
        table.increments("id").primary().unique();
        table
            .integer("userId")
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table
            .integer("tournamentId")
            .unsigned()
            .references("id")
            .inTable("tournaments")
            .onDelete("CASCADE")
            .index();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return (
        await knex.schema.dropTableIfExists("likedTournaments"),
		await knex.schema.dropTableIfExists("users-tournaments-teams"),
		await knex.schema.dropTableIfExists("users-teams"),
		await knex.schema.dropTableIfExists("users-teams-matches"),
		await knex.schema.dropTableIfExists("matches"),
		await knex.schema.dropTableIfExists("bracket"),
		await knex.schema.dropTableIfExists("tournaments"),
		await knex.schema.dropTableIfExists("teams"),
		await knex.schema.dropTableIfExists("users")
	);
  
};
