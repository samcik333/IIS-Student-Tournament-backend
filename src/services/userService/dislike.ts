import { ParsedQs } from "qs";
import User from "../../models/userModel";
import Liked from "../../models/likedTournaments";


export const dislikeTournament = async (req: any) => {
    const userID = req.body.id;
    const tournamentID = req.body.tournamentID;

    await Liked.query().findOne(userID,userID && tournamentID,tournamentID).delete();
}
