import Tournament from "../../models/tournamentModel";

export const findTournament = async (id: string) => {
	return await Tournament.query().findOne("id", id);
};

export const findTournamentByName = async (name: string) => {
	return await Tournament.query().findOne("name", name);
};
