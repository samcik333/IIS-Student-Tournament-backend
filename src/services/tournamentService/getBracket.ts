import Bracket from "../../models/bracketModel";

export const getBracket = async (id: string) => {
    return await Bracket.query().findOne("tournamentId", id);
}