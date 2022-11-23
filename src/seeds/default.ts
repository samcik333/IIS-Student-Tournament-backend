import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("teams").del();
	await knex("tournaments").del();
	await knex("matches").del();
	await knex("users-teams-matches").del();
	await knex("users-tournaments-teams").del();
	await knex("users-teams").del();

	// Inserts seed entries
	await knex("users").insert([
		{
			id: 1234567,
			name: "admin",
			lastname: "admin",
			username: "admin",
			email: "admin@gmail.com",
			password: "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "admin",
			photo:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			gold: 0,
			silver: 0,
			bronze: 0,
			numberOfGames: 0,
			numberOfWins: 0,
		},
		{
			id: 1234568,
			name: "Janko",
			lastname: "Mrkvička",
			username: "janko1",
			email: "janko@gmail.com",
			password: "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", // 12345678
			role: "user",
			photo:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
		{
			id: 1234569,
			name: "Peter",
			lastname: "Pavol",
			username: "pavol1",
			email: "pavol@gmail.com",
			password: "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
		{
			id: 1000,
			name: "Janko",
			lastname: "Uhorka",
			username: "janko2",
			email: "janko2@gmail.com",
			password: "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
	]);
	await knex("teams").insert([
		{
			id: 1000,
			ownerId: 1000,
			name: "Jankov tím 1",
			capacity: 15,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
		{
			id: 2000,
			ownerId: 1000,
			name: "Jankov tím 2",
			capacity: 15,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
		{
			id: 1234567,
			ownerId: 1234569,
			name: "Oštinohy",
			capacity: 15,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
		{
			id: 1234568,
			ownerId: 1234568,
			name: "Oštiruky",
			capacity: 15,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 34,
			numberOfWins: 16,
		},
	]);
	await knex("tournaments").insert([
		{
			id: 1234567,
			ownerId: 1234569,
			name: "LOL turnaj",
			place: "PPV A03",
			date: new Date(),
			players: 2,
			capacity: 1,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "waiting",
		},
		{
			id: 1234566,
			ownerId: 1234569,
			name: "LOL turnaj",
			place: "FEKT",
			date: new Date(),
			players: 2,
			capacity: 1,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "waiting",
		},
		{
			id: 1234565,
			ownerId: 1234569,
			name: "CSGO",
			place: "PPV A05",
			date: new Date(),
			players: 0,
			capacity: 10,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "open",
		},
		{
			id: 1234564,
			ownerId: 1234569,
			name: "LOL turnaj",
			place: "Purkyne",
			date: new Date(),
			players: 2,
			capacity: 1,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "open",
		},
		{
			id: 1234563,
			ownerId: 1234569,
			name: "Šípky",
			place: "Purkyne",
			date: new Date(),
			players: 0,
			capacity: 16,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "closed",
		},
		{
			id: 1234562,
			ownerId: 1234569,
			name: "MS 2022",
			place: "Purkyne",
			date: new Date(),
			players: 5,
			capacity: 10,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			state: "open",
		},
	]);
	await knex("matches").insert([
		{
			id: 1234567,
			tournamentId: 1234567,
			date: new Date(),
			firstScore: 12,
			secondScore: 10,
		},
	]);
	await knex("users-teams-matches").insert([
		{
			id: 1234567,
			matchId: 1234567,
			teamId: 1234567,
		},
		{
			id: 1234568,
			matchId: 1234567,
			teamId: 1234568,
		},
	]);
	await knex("users-teams").insert([
		{
			id: 1234567,
			userId: 1234568,
			teamId: 1234568,
		},
		{
			id: 1234568,
			userId: 1234569,
			teamId: 1234567,
		},
		{
			id: 1000,
			userId: 1000,
			teamId: 1000,
		},
		{
			id: 2000,
			userId: 1000,
			teamId: 2000,
		},
	]);
	await knex("users-tournaments-teams").insert([
		{
			id: 1234567,
			teamId: 1234568,
			tournamentId: 1234567,
		},
		{
			id: 1234568,
			teamId: 1234567,
			tournamentId: 1234567,
		},
	]);
}
