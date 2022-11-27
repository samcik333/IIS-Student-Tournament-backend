import { Model, RelationMappings, RelationMappingsThunk } from "objection";
import Tournament from "./tournamentModel";

export default class Bracket extends Model {
    id!: number;
    tournamentId!: number;
    final!: string[2];
    bronze!: string[2];
    eightfinals!:string[16];
    quarterfinals!:string[8];
    semifinals!:string[4];
    static get tableName() {
      return "bracket";
    }

    static get relationMappings(){
        return {
            tournament: {
                relation: Model.BelongsToOneRelation,
                modelClass: Tournament,
                join: {
                  from: "bracket.tournamentId",
                  to: "tournaments.id",
                },
            },
        }
    }
}