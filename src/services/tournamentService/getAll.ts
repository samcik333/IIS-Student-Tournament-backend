import {ParsedQs} from "qs";
import Tournament from "../../models/tournamentModel";

export const getAll = async (query: ParsedQs) => {
	const name = query.name;
	var condition = name ? `%${name}%` : null;
	const value = "%" + condition + "%";
	if (condition) {
		return await Tournament.query().where("name", "like", value);
	} else {
		return await Tournament.query();
	}
};
