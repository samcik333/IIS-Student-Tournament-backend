import Tournament from "../../models/tournamentModel";

export const findTournament = async (id: string) => {
    return await Tournament.query().findOne("id", id);
}