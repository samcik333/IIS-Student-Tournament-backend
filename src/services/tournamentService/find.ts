import Tournament from "../../models/tournamentModel";
import User from "../../models/userModel";

export const findTournament = async (id: string) => {
	return await Tournament.query().findOne("id", id);
};

export const findTournamentByName = async (name: string) => {
	return await Tournament.query().findOne("name", name);
};

export const findOwnerTournaments = async (id: string) => {
	const value = parseInt(id);
	return await Tournament.query().where("ownerId", value);
};
