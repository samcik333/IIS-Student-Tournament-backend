import {Model, RelationMappings, RelationMappingsThunk} from "objection";
import Tournament from "./tournamentModel";

export default class Bracket extends Model {
	id!: number;
	tournamentId!: number;
	final!: string[1];
	bronze!: string[1];
	eightfinals!: string[8];
	quarterfinals!: string[4];
	semifinals!: string[2];
	static get tableName() {
		return "bracket";
	}

	static get relationMappings() {
		return {
			tournament: {
				relation: Model.BelongsToOneRelation,
				modelClass: Tournament,
				join: {
					from: "bracket.tournamentId",
					to: "tournaments.id",
				},
			},
		};
	}
}
