/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
	// Deletes ALL existing entries
	  await knex("users").del();
	  await knex("teams").del();
	  await knex("tournaments").del();
	  await knex("matches").del();
	  await knex("users-teams-matches").del();
	  await knex("users-tournaments-teams").del();
	  await knex("users-teams").del();
	  await knex("bracket").del();
  
	  // Inserts seed entries
	  await knex("users").insert([
		  {
			  id: 1234567,
			  name: "admin",
			  lastname: "admin",
			  username: "admin",
			  email: "admin@gmail.com",
			  password:
				  "$2b$10$tChjUcdkmEKBK/lTGFHqquUJJhuQqST3EL3PduUx/ln7eZjOVsrGu", //admin
			  role: "admin",
			  photo: "https://clipart.com/thumbs.php?f=/061/batch_01/cd1/computer_pictograms/com_picto_199_tnb.png",
			  gold: 0,
			  silver: 0,
			  bronze: 0,
			  numberOfGames: 0,
			  numberOfWins: 0,
		  },
		  {
			  id: 1006,
			  name: "Janko",
			  lastname: "Mrkvička",
			  username: "janko1",
			  email: "janko@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", // 12345678
			  role: "user",
			  photo: "https://img.freepik.com/premium-vector/man-cartoon-character-profile-clipart-drawing_51194-284.jpg",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1007,
			  name: "Peter",
			  lastname: "Pavol",
			  username: "pavol1",
			  email: "pavol@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
			  email: "uhorka@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1001,
			  name: "Andrej",
			  lastname: "Brod",
			  username: "unicor",
			  email: "brod@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1002,
			  name: "Allen",
			  lastname: "Sakal",
			  username: "silver",
			  email: "silver@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1003,
			  name: "Vlasto",
			  lastname: "Uhorka",
			  username: "vlasto",
			  email: "vlasto@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1004,
			  name: "Jana",
			  lastname: "Vajna",
			  username: "silko",
			  email: "silko@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			  gold: 5,
			  silver: 0,
			  bronze: 0,
			  numberOfGames: 20,
			  numberOfWins: 16,
		  },
		  {
			  id: 1005,
			  name: "Janko",
			  lastname: "Hric",
			  username: "hric11",
			  email: "hruk@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://img.freepik.com/premium-vector/man-cartoon-character-profile-clipart-drawing_51194-284.jpg",
			  gold: 3,
			  silver: 1,
			  bronze: 2,
			  numberOfGames: 56,
			  numberOfWins: 16,
		  },
		  {
			  id: 1008,
			  name: "Juraj",
			  lastname: "Bagi",
			  username: "george",
			  email: "george@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://www.clipartmax.com/png/middle/15-153165_log-clipart-user-profile-phone-png.png",
			  gold: 5,
			  silver: 5,
			  bronze: 5,
			  numberOfGames: 27,
			  numberOfWins: 16,
		  },
		  {
			  id: 1009,
			  name: "Marika",
			  lastname: "Baros",
			  username: "bara",
			  email: "bara@gmail.com",
			  password:
				  "$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			  role: "user",
			  photo: "https://simg.nicepng.com/png/small/19-191640_banner-black-and-white-download-counter-terrorist-png.png",
			  gold: 3,
			  silver: 1,
			  bronze: 2,
			  numberOfGames: 19,
			  numberOfWins: 16,
		  },
		  {
			id: 1010,
			name: "Viera",
			lastname: "Mala",
			username: "veruna",
			email: "veru@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://www.clipartmax.com/png/middle/15-153165_log-clipart-user-profile-phone-png.png",
			gold: 5,
			silver: 15,
			bronze: 5,
			numberOfGames: 79,
			numberOfWins: 45,
		},
		{
			id: 1011,
			name: "Andrej",
			lastname: "Hrdy",
			username: "hrdlo",
			email: "hrdlo@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://simg.nicepng.com/png/small/19-191640_banner-black-and-white-download-counter-terrorist-png.png",
			gold: 3,
			silver: 1,
			bronze: 2,
			numberOfGames: 15,
			numberOfWins: 7,
		},
		{
			id: 1012,
			name: "Juraj",
			lastname: "Yolo",
			username: "yolo",
			email: "yolo@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://www.clipartmax.com/png/middle/15-153165_log-clipart-user-profile-phone-png.png",
			gold: 5,
			silver: 5,
			bronze: 5,
			numberOfGames: 27,
			numberOfWins: 16,
		},
		{
			id: 1013,
			name: "Marika",
			lastname: "Test",
			username: "test3",
			email: "test3@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://simg.nicepng.com/png/small/19-191640_banner-black-and-white-download-counter-terrorist-png.png",
			gold: 3,
			silver: 0,
			bronze: 2,
			numberOfGames: 29,
			numberOfWins: 16,
		},
		{
			id: 1014,
			name: "Test",
			lastname: "Bagi",
			username: "test2",
			email: "test2@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://www.clipartmax.com/png/middle/15-153165_log-clipart-user-profile-phone-png.png",
			gold: 5,
			silver: 5,
			bronze: 5,
			numberOfGames: 27,
			numberOfWins: 16,
		},
		{
			id: 1015,
			name: "Test",
			lastname: "Baros",
			username: "test1",
			email: "test1@gmail.com",
			password:
				"$2b$10$WbhwUypOumFjw8lklLGGfuK5M7zkqSaMBZdrD276HZnS4.N0axXCu", //12345678
			role: "user",
			photo: "https://simg.nicepng.com/png/small/19-191640_banner-black-and-white-download-counter-terrorist-png.png",
			gold: 0,
			silver: 1,
			bronze: 2,
			numberOfGames: 23,
			numberOfWins: 6,
		},
	  ]);
	  await knex("teams").insert([
		  {
			  id: 1000,
			  ownerId: 1000,
			  name: "Jankov tím 1",
			  capacity: 15,
			  numberOfPlayers: 1,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 3,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1001,
			  ownerId: 1008,
			  name: "PreGang",
			  capacity: 15,
			  numberOfPlayers: 1,
			  logo: "https://clipartix.com/wp-content/uploads/2016/07/Teamwork-clipart-2.jpg",
			  gold: 25,
			  silver: 5,
			  bronze: 0,
			  numberOfGames: 42,
			  numberOfWins: 39,
		  },
		  {
			  id: 1002,
			  ownerId: 1002,
			  name: "Luckers",
			  capacity: 15,
			  numberOfPlayers: 4,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 7,
			  silver: 9,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1003,
			  ownerId: 1006,
			  name: "GANG",
			  capacity: 15,
			  numberOfPlayers: 5,
			  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEGZhhS5AUXiExkixOBqaf9cwdE7K6vDUTg&usqp=CAU",
			  gold: 5,
			  silver: 5,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1004,
			  ownerId: 1007,
			  name: "Test1",
			  capacity: 15,
			  numberOfPlayers: 6,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 7,
			  silver: 9,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1005,
			  ownerId: 1008,
			  name: "Test2",
			  capacity: 5,
			  numberOfPlayers: 3,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 7,
			  silver: 9,
			  bronze: 0,
			  numberOfGames: 34,
			  numberOfWins: 16,
		  },
		  {
			  id: 1006,
			  ownerId: 1009,
			  name: "Test3",
			  capacity: 15,
			  numberOfPlayers: 2,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 2,
			  silver: 9,
			  bronze: 5,
			  numberOfGames: 41,
			  numberOfWins: 16,
		  },
		  {
			  id: 1007,
			  ownerId: 1008,
			  name: "Test4",
			  capacity: 15,
			  numberOfPlayers: 1,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  gold: 6,
			  silver: 1,
			  bronze: 0,
			  numberOfGames: 22,
			  numberOfWins: 13,
		  },
		  {
			id: 1008,
			ownerId: 1002,
			name: "Mamba",
			capacity: 6,
			numberOfPlayers: 2,
			logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			gold: 3,
			silver: 1,
			bronze: 0,
			numberOfGames: 16,
			numberOfWins: 8,
		},
	  ]);
	  await knex("tournaments").insert([
		  {
			  id: 1000,
			  ownerId: 1007,
			  name: "LOL turnaj",
			  place: "PPV A03",
			  date: new Date(),
			  mode: 5,
			  capacity: 8,
			  numberOfPlayers: 0,
			  logo: "https://cdn.imgbin.com/5/0/22/imgbin-league-of-legends-esports-logo-font-game-league-of-legends-2018-umZSTEt7jHiiJYnD0wABm1Ybs.jpg",
			  state: "waiting",
		  },
		  {
			  id: 1001,
			  ownerId: 1006,
			  name: "LOL turnaj",
			  place: "FEKT",
			  date: new Date(),
			  mode: 2,
			  capacity: 4,
			  numberOfPlayers: 0,
			  logo: "https://cdn.imgbin.com/5/0/22/imgbin-league-of-legends-esports-logo-font-game-league-of-legends-2018-umZSTEt7jHiiJYnD0wABm1Ybs.jpg",
			  state: "waiting",
		  },
		  {
			  id: 1002,
			  ownerId: 1007,
			  name: "CSGO",
			  place: "PPV A05",
			  date: new Date(),
			  mode: 5,
			  capacity: 8,
			  numberOfPlayers: 4,
			  logo: "https://www.freeiconspng.com/img/42843",
			  state: "open",
		  },
		  {
			  id: 1003,
			  ownerId: 1003,
			  name: "LOL turnaj",
			  place: "Purkyne",
			  date: new Date(),
			  mode: 4,
			  capacity: 8,
			  numberOfPlayers: 8,
			  logo: "https://cdn.imgbin.com/5/0/22/imgbin-league-of-legends-esports-logo-font-game-league-of-legends-2018-umZSTEt7jHiiJYnD0wABm1Ybs.jpg",
			  state: "closed",
		  },
		  {
			  id: 1004,
			  ownerId: 1006,
			  name: "Šípky",
			  place: "Purkyne",
			  date: new Date(),
			  mode: 1,
			  capacity: 4,
			  numberOfPlayers: 4,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  state: "closed",
		  },
		  {
			  id: 1005,
			  ownerId: 1007,
			  name: "MS 2022",
			  place: "Purkyne",
			  date: new Date(),
			  mode: 5,
			  capacity: 8,
			  numberOfPlayers: 8,
			  logo: "https://trbahadurpur.com/wp-content/uploads/2022/03/boll-e1646199548324.jpg",
			  state: "closed",
		  },
		  {
			  id: 1006,
			  ownerId: 1006,
			  name: "Šípky",
			  place: "Purkyne",
			  date: new Date(),
			  mode: 1,
			  capacity: 16,
			  numberOfPlayers: 16,
			  logo: "https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png",
			  state: "closed",
		  },
		  {
			  id: 1007,
			  ownerId: 1004,
			  name: "Šípky",
			  place: "Purkyne",
			  date: new Date(),
			  mode: 1,
			  capacity: 16,
			  numberOfPlayers: 3,
			  logo: "https://cdn.pixabay.com/photo/2015/05/20/21/48/dart-776196_960_720.png",
			  state: "open",
		  },
	  ]);
	  await knex("matches").insert([
		  {
			  id: 1001,
			  tournamentId: 1003,
			  date: new Date(),
			  firstScore: 1,
			  secondScore: 2,
			  firstTeam: 1005,
			  secondTeam: 1003,
			  order: 1,
		  },
		  {
			id: 1002,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 1,
			secondScore: 2,
			firstTeam: 1002,
			secondTeam: 1003,
			order: 1,
		},
		{
			id: 1003,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 3,
			secondScore: 2,
			firstTeam: 1001,
			secondTeam: 1000,
			order: 2,
		},
		{
			id: 1004,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 1,
			secondScore: 4,
			firstTeam: 1004,
			secondTeam: 1005,
			order: 3,
		},
		{
			id: 1005,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 5,
			secondScore: 2,
			firstTeam: 1006,
			secondTeam: 1007,
			order: 4,
		},
		{
			id: 1006,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 1,
			secondScore: 2,
			firstTeam: 1003,
			secondTeam: 1001,
			order: 1,
		},
		{
			id: 1007,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 1,
			secondScore: 2,
			firstTeam: 1005,
			secondTeam: 1006,
			order: 2,
		},
		{
			id: 1008,
			tournamentId: 1003,
			date: new Date(),
			firstScore: 1,
			secondScore: 3,
			firstTeam: 1001,
			secondTeam: 1006,
			order: 1,
		},
		{
			id: 1009,
			tournamentId: 1004,
			date: new Date(),
			firstScore: 4,
			secondScore: 2,
			firstTeam: 1003,
			secondTeam: 1005,
			order: 1,
		},
		{
			id: 1010,
			tournamentId: 1004,
			date: new Date(),
			firstScore: 0,
			secondScore: 0,
			firstTeam: 1006,
			secondTeam: 1008,
			order: 2,
		},
		{
			id: 1011,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 3,
			secondScore: 2,
			firstTeam: 1000,
			secondTeam: 1001,
			order: 1,
		},
		{
			id: 1012,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 0,
			secondScore: 0,
			firstTeam: 1002,
			secondTeam: 1003,
			order: 2,
		},
		{
			id: 1013,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 0,
			secondScore: 0,
			firstTeam: 1004,
			secondTeam: 1005,
			order: 3,
		},
		{
			id: 1014,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 4,
			secondScore: 2,
			firstTeam: 1006,
			secondTeam: 1007,
			order: 4,
		},
		{
			id: 1015,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 5,
			secondScore: 2,
			firstTeam: 1008,
			secondTeam: 1009,
			order: 5,
		},
		{
			id: 1016,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 1,
			secondScore: 3,
			firstTeam: 1010,
			secondTeam: 1011,
			order: 6,
		},
		{
			id: 1017,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 6,
			secondScore: 2,
			firstTeam: 1012,
			secondTeam: 1013,
			order: 7,
		},
		{
			id: 1018,
			tournamentId: 1006,
			date: new Date(),
			firstScore: 0,
			secondScore: 0,
			firstTeam: 1014,
			secondTeam: 1015,
			order: 8,
		},
	  ]);
	  await knex("users-teams-matches").insert([
		{
			id: 1000,
			matchId: 1001,
			teamId: 1005,
		},
		{
			id: 1001,
			matchId: 1001,
			teamId: 1003,
		},
		{
			id: 1002,
			matchId: 1002,
			teamId: 1002,
		},
		{
			id: 1003,
			matchId: 1002,
			teamId: 1003,
		},
		{
			id: 1004,
			matchId: 1003,
			teamId: 1001,
		},
		{
			id: 1005,
			matchId: 1003,
			teamId: 1000,
		},
		{
			id: 1006,
			matchId: 1004,
			teamId: 1004,
		},
		{
			id: 1007,
			matchId: 1004,
			teamId: 1005,
		},
		{
			id: 1008,
			matchId: 1005,
			teamId: 1006,
		},
		{
			id: 1009,
			matchId: 1005,
			teamId: 1007,
		},
		{
			id: 1010,
			matchId: 1006,
			teamId: 1003,
		},
		{
			id: 1011,
			matchId: 1006,
			teamId: 1001,
		},
		{
			id: 1012,
			matchId: 1007,
			teamId: 1005,
		},
		{
			id: 1013,
			matchId: 1007,
			teamId: 1006,
		},
		{
			id: 1014,
			matchId: 1008,
			teamId: 1001,
		},
		{
			id: 1015,
			matchId: 1008,
			teamId: 1006,
		},
		{
			id: 1016,
			matchId: 1009,
			teamId: 1003,
		},
		{
			id: 1017,
			matchId: 1009,
			teamId: 1005,
		},
		{
			id: 1018,
			matchId: 1010,
			teamId: 1006,
		},
		{
			id: 1019,
			matchId: 1010,
			teamId: 1008,
		},
		{
			id: 1020,
			matchId: 1011,
			userId: 1000,
		},
		{
			id: 1021,
			matchId: 1011,
			userId: 1001,
		},
		{
			id: 1022,
			matchId: 1012,
			userId: 1002,
		},
		{
			id: 1023,
			matchId: 1012,
			userId: 1003,
		},
		{
			id: 1024,
			matchId: 1013,
			userId: 1004,
		},
		{
			id: 1025,
			matchId: 1013,
			userId: 1005,
		},
		{
			id: 1026,
			matchId: 1014,
			userId: 1006,
		},
		{
			id: 1027,
			matchId: 1014,
			userId: 1007,
		},
		{
			id: 1028,
			matchId: 1015,
			userId: 1008,
		},
		{
			id: 1029,
			matchId: 1015,
			userId: 1009,
		},
		{
			id: 1030,
			matchId: 1016,
			userId: 1010,
		},
		{
			id: 1031,
			matchId: 1016,
			userId: 1011,
		},
		{
			id: 1032,
			matchId: 1017,
			userId: 1012,
		},
		{
			id: 1033,
			matchId: 1017,
			userId: 1013,
		},
		{
			id: 1034,
			matchId: 1018,
			userId: 1014,
		},
		{
			id: 1035,
			matchId: 1018,
			userId: 1015,
		},
		
	  ]);
	  await knex("users-teams").insert([
		  {
			  id: 1000,
			  userId: 1000,
			  teamId: 1000,
		  },
		  {
			  id: 1001,
			  userId: 1008,
			  teamId: 1001,
		  },
		  {
			  id: 1002,
			  userId: 1000,
			  teamId: 1002,
		  },
		  {
			  id: 1003,
			  userId: 1002,
			  teamId: 1002,
		  },
		  {
			  id: 1004,
			  userId: 1005,
			  teamId: 1002,
		  },
		  {
			  id: 1005,
			  userId: 1001,
			  teamId: 1003,
		  },
		  {
			  id: 1006,
			  userId: 1000,
			  teamId: 1003,
		  },
		  {
			  id: 1007,
			  userId: 1002,
			  teamId: 1003,
		  },
		  {
			  id: 1008,
			  userId: 1009,
			  teamId: 1003,
		  },
		  {
			  id: 1009,
			  userId: 1006,
			  teamId: 1003,
		  },
		  {
			  id: 1010,
			  userId: 1000,
			  teamId: 1004,
		  },
		  {
			  id: 1011,
			  userId: 1004,
			  teamId: 1004,
		  },
		  {
			  id: 1012,
			  userId: 1000,
			  teamId: 1004,
		  },
		  {
			  id: 1013,
			  userId: 1005,
			  teamId: 1004,
		  },
		  {
			  id: 1014,
			  userId: 1007,
			  teamId: 1004,
		  },
		  {
			  id: 1015,
			  userId: 1008,
			  teamId: 1004,
		  },
		  {
			  id: 1016,
			  userId: 1008,
			  teamId: 1005,
		  },
		  {
			  id: 1017,
			  userId: 1007,
			  teamId: 1005,
		  },
		  {
			  id: 1018,
			  userId: 1003,
			  teamId: 1005,
		  },
		  {
			  id: 1019,
			  userId: 1009,
			  teamId: 1006,
		  },
		  {
			  id: 1020,
			  userId: 1001,
			  teamId: 1006,
		  },
		  {
			  id: 1021,
			  userId: 1008,
			  teamId: 1007,
		  },
		  {
			  id: 1022,
			  userId: 1002,
			  teamId: 1008,
		  },
		  {
			  id: 1023,
			  userId: 1004,
			  teamId: 1008,
		  },
	  ]);
	  await knex("users-tournaments-teams").insert([
		{
			id: 1000,
			tournamentId: 1003,
			teamId: 1005,
		},
		{
			id: 1001,
			tournamentId: 1003,
			teamId: 1003,
		},
		{
			id: 1002,
			tournamentId: 1003,
			teamId: 1002,
		},
		{
			id: 1003,
			tournamentId: 1003,
			teamId: 1003,
		},
		{
			id: 1004,
			tournamentId: 1003,
			teamId: 1001,
		},
		{
			id: 1005,
			tournamentId: 1003,
			teamId: 1000,
		},
		{
			id: 1006,
			tournamentId: 1003,
			teamId: 1004,
		},
		{
			id: 1007,
			tournamentId: 1003,
			teamId: 1005,
		},
		{
			id: 1008,
			tournamentId: 1003,
			teamId: 1006,
		},
		{
			id: 1009,
			tournamentId: 1003,
			teamId: 1007,
		},
		{
			id: 1010,
			tournamentId: 1003,
			teamId: 1003,
		},
		{
			id: 1011,
			tournamentId: 1003,
			teamId: 1001,
		},
		{
			id: 1012,
			tournamentId: 1003,
			teamId: 1005,
		},
		{
			id: 1013,
			tournamentId: 1003,
			teamId: 1006,
		},
		{
			id: 1014,
			tournamentId: 1003,
			teamId: 1001,
		},
		{
			id: 1015,
			tournamentId: 1003,
			teamId: 1006,
		},
		{
			id: 1016,
			tournamentId: 1004,
			teamId: 1003,
		},
		{
			id: 1017,
			tournamentId: 1004,
			teamId: 1005,
		},
		{
			id: 1018,
			tournamentId: 1004,
			teamId: 1006,
		},
		{
			id: 1019,
			tournamentId: 1004,
			teamId: 1008,
		},
		{
			id: 1020,
			tournamentId: 1006,
			userId: 1000,
		},
		{
			id: 1021,
			tournamentId: 1006,
			userId: 1001,
		},
		{
			id: 1022,
			tournamentId: 1006,
			userId: 1002,
		},
		{
			id: 1023,
			tournamentId: 1006,
			userId: 1003,
		},
		{
			id: 1024,
			tournamentId: 1006,
			userId: 1004,
		},
		{
			id: 1025,
			tournamentId: 1006,
			userId: 1005,
		},
		{
			id: 1026,
			tournamentId: 1006,
			userId: 1006,
		},
		{
			id: 1027,
			tournamentId: 1006,
			userId: 1007,
		},
		{
			id: 1028,
			tournamentId: 1006,
			userId: 1008,
		},
		{
			id: 1029,
			tournamentId: 1006,
			userId: 1009,
		},
		{
			id: 1030,
			tournamentId: 1006,
			userId: 1010,
		},
		{
			id: 1031,
			tournamentId: 1006,
			userId: 1011,
		},
		{
			id: 1032,
			tournamentId: 1006,
			userId: 1012,
		},
		{
			id: 1033,
			tournamentId: 1006,
			userId: 1013,
		},
		{
			id: 1034,
			tournamentId: 1006,
			userId: 1014,
		},
		{
			id: 1035,
			tournamentId: 1006,
			userId: 1015,
		},
		{
			id: 1036,
			tournamentId: 1005,
			teamId: 1007,
		},
		{
			id: 1037,
			tournamentId: 1005,
			teamId: 1006,
		},
		{
			id: 1038,
			tournamentId: 1005,
			teamId: 1000,
		},
		{
			id: 1039,
			tournamentId: 1005,
			teamId: 1001,
		},
		{
			id: 1040,
			tournamentId: 1005,
			teamId: 1002,
		},
		{
			id: 1041,
			tournamentId: 1005,
			teamId: 1004,
		},
		{
			id: 1042,
			tournamentId: 1005,
			teamId: 1003,
		},
		{
			id: 1043,
			tournamentId: 1005,
			teamId: 1005,
		},
		{
			id: 1044,
			tournamentId: 1007,
			userId: 1007,
		},
		{
			id: 1045,
			tournamentId: 1007,
			userId: 1008,
		},
		{
			id: 1046,
			tournamentId: 1007,
			userId: 1009,
		},
	  ]);
	  await knex("bracket").insert([
		  {
			  id: 1000,
			  tournamentId: 1000,
			  final: [],
			  bronze: [],
			  eightfinals: [],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1001,
			  tournamentId: 1001,
			  final: [],
			  bronze: [],
			  eightfinals: [],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1002,
			  tournamentId: 1002,
			  final: [],
			  bronze: [],
			  eightfinals: [],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1003,
			  tournamentId: 1003,
			  final: [],
			  bronze: [1001],
			  eightfinals: [1002,1003,1004,1005],
			  quarterfinals: [1006,1007],
			  semifinals: [1008],
		  },
		  {
			  id: 1004,
			  tournamentId: 1004,
			  final: [],
			  bronze: [],
			  eightfinals: [1009,1010],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1005,
			  tournamentId: 1005,
			  final: [],
			  bronze: [],
			  eightfinals: [],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1006,
			  tournamentId: 1006,
			  final: [],
			  bronze: [],
			  eightfinals: [1011,1012,1013,1014,1015,1016,1014,1018],
			  quarterfinals: [],
			  semifinals: [],
		  },
		  {
			  id: 1007,
			  tournamentId: 1007,
			  final: [],
			  bronze: [],
			  eightfinals: [],
			  quarterfinals: [],
			  semifinals: [],
		  },
  
	  ]);
  };
  