import { ParsedQs } from "qs";
import User from "../../models/userModel";
import Liked from "../../models/likedTournaments";


export const dislikeTournament = async (req: any) => {
    const userID = req.body.userID;
    const tournamentID = req.body.tournamentID;
    return await Liked.query().where('userId',userID).where('tournamentId',tournamentID).delete();
}
