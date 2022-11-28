import Match from "../../models/matchModel";

export const getMacth = async (id: string) => {
    return await Match.query().findOne("id", id);
}