import { Model } from "objection";
import Team from "./teamModel";
import Tournament from "./tournamentModel";
import User from "./userModel";

export default class Match extends Model {
  id!: number;
  tournamentId!: number;
  date!: Date;
  firstScore: number = 0;
  secondScore: number = 0;
  firstTeam!: number;
  secondTeam!: number;
  order!: number;
  static get tableName() {
    return "matches";
  }

  static get relationMappings() {
    return {
      tournament: {
        relation: Model.BelongsToOneRelation,
        modelClass: Tournament,
        join: {
          from: "matches.tournamentId",
          to: "tournaments.id",
        },
      },
      players: {
        relation: Model.ManyToManyRelation,
        modelClass: User,

        join: {
          from: "matches.id",

          through: {
            from: "users-teams-matches.matchId",
            to: "users-teams-matches.userId",
          },
          to: "users.id",
        },
      },
      teams: {
        relation: Model.ManyToManyRelation,
        modelClass: Team,

        join: {
          from: "matches.id",

          through: {
            from: "users-teams-matches.matchId",
            to: "users-teams-matches.teamId",
          },
          to: "teams.id",
        },
      },
    };
  }
}
