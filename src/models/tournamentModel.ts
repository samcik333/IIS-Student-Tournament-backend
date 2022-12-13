import {Model} from "objection";
import Bracket from "./bracketModel";
import Match from "./matchModel";
import Team from "./teamModel";
import User from "./userModel";

export default class Tournament extends Model {
	id!: number;
	ownerId!: number;
	name!: string;
	date: Date = new Date();
	place!: string;
	mode!: number;
	capacity!: number;
	numberOfPlayers: number = 0;
	logo: string =
		"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	state: "waiting" | "open" | "closed" = "waiting";
	description!: string;
	static get tableName() {
		return "tournaments";
	}

	static get relationMappings() {
		return {
			owner: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: "tournaments.ownerId",
					to: "users.id",
				},
			},
			matches: {
				relation: Model.HasManyRelation,
				modelClass: Match,
				join: {
					from: "tournaments.id",
					to: "matches.tournamentId",
				},
			},
			participants: {
				relation: Model.ManyToManyRelation,
				modelClass: User,

				join: {
					from: "tournaments.id",

					through: {
						from: "users-tournaments-teams.tournamentId",
						to: "users-tournaments-teams.userId",
					},
					to: "users.id",
				},
			},
			teams: {
				relation: Model.ManyToManyRelation,
				modelClass: Team,

				join: {
					from: "tournaments.id",

					through: {
						from: "users-tournaments-teams.tournamentId",
						to: "users-tournaments-teams.teamId",
					},
					to: "teams.id",
				},
			},
			bracket: {
				relation: Model.HasManyRelation,
				modelClass: Bracket,
				join: {
					from: "tournaments.id",
					to: " bracket.tournamentId",
				},
			},
			likedTournaments: {
				relation: Model.ManyToManyRelation,
				modelClass: User,

				join: {
					from: "tournaments.id",

					through: {
						from: "likedTournaments.tournamentId",
						to: "likedTournaments.userId",
					},
					to: "users.id",
				},
			},
		};
	}
}
