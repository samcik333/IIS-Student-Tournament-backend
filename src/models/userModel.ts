import {Model} from "objection";
import Match from "./matchModel";
import Team from "./teamModel";
import Tournament from "./tournamentModel";

export default class User extends Model {
	id!: number;
	name!: string;
	lastname!: string;
	username!: string;
	email!: string;
	password!: string;
	photo: string =
		"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
	role: "admin" | "user" = "user";
	gold: number = 0;
	silver: number = 0;
	bronze: number = 0;
	numberOfGames: number = 0;
	numberOfWins: number = 0;
	static get tableName() {
		return "users";
	}

	static get relationMappings() {
		return {
			teamsOwner: {
				relation: Model.HasManyRelation,
				modelClass: Team,
				join: {
					from: "users.id",
					to: "teams.ownerId",
				},
			},
			tournamentsOwner: {
				relation: Model.HasManyRelation,
				modelClass: Tournament,
				join: {
					from: "users.id",
					to: "tournaments.ownerId",
				},
			},
			matches: {
				relation: Model.ManyToManyRelation,
				modelClass: Match,

				join: {
					from: "users.id",

					through: {
						from: "users-teams-matches.userId",
						to: "users-teams-matches.matchId",
					},
					to: "matches.id",
				},
			},
			teams: {
				relation: Model.ManyToManyRelation,
				modelClass: Team,

				join: {
					from: "users.id",

					through: {
						from: "users-teams.userId",
						to: "users-teams.teamId",
					},
					to: "teams.id",
				},
			},
			tournaments: {
				relation: Model.ManyToManyRelation,
				modelClass: Tournament,

				join: {
					from: "users.id",

					through: {
						from: "users-tournaments-teams.userId",
						to: "users-tournaments-teams.tournamentId",
					},
					to: "tournaments.id",
				},
			},
			liked: {
				relation: Model.ManyToManyRelation,
				modelClass: Tournament,

				join: {
					from: "users.id",

					through: {
						from: "likedTournaments.userId",
						to: "likedTournaments.tournamentId",
					},
					to: "tournaments.id",
				},
			},
		};
	}
}
