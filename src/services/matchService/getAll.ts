import Match from "../../models/matchModel";

export const getAll = async (id: string) => {
    return (await Match.query().where("tournamentId", id))
}