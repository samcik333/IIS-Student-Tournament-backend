import {Model} from "objection";
import Match from "./matchModel";
import Tournament from "./tournamentModel";
import User from "./userModel";

export default class Team extends Model {
	id!: number;
	ownerId!: number;
	name!: string;
	capacity: number = 15;
	numberOfPlayers: number = 1;
	logo: string =
		"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	gold: number = 0;
	silver: number = 0;
	bronze: number = 0;
	numberOfGames: number = 0;
	numberOfWins: number = 0;
	static get tableName() {
		return "teams";
	}
	static get relationMappings() {
		return {
			owner: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "teams.ownerId",
					to: "users.id",
				},
			},
			players: {
				relation: Model.ManyToManyRelation,
				modelClass: User,

				join: {
					from: "teams.id",

					through: {
						from: "users-teams.teamId",
						to: "users-teams.userId",
					},
					to: "users.id",
				},
			},
			matches: {
				relation: Model.ManyToManyRelation,
				modelClass: Match,

				join: {
					from: "teams.id",

					through: {
						from: "users-teams-matches.teamId",
						to: "users-teams-matches.matchId",
					},
					to: "matches.id",
				},
			},
			tournaments: {
				relation: Model.ManyToManyRelation,
				modelClass: Tournament,

				join: {
					from: "teams.id",

					through: {
						from: "users-tournaments-teams.teamId",
						to: "users-tournaments-teams.tournamentId",
					},
					to: "tournaments.id",
				},
			},
		};
	}
}
