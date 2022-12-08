import { Model } from "objection";
import Match from "./matchModel";
import Team from "./teamModel";
import Tournament from "./tournamentModel";

export default class Liked extends Model {
    id!: number;
    userId!: number;
    tournamentId!: number;
  static get tableName() {
    return "likedTournaments";
  }
}
