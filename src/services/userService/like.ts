import { ParsedQs } from "qs";
import Liked from "../../models/likedTournaments";
import User from "../../models/userModel";


export const likeTournament = async (req: any) => {
    const userID = req.body.userID;
    const tournamentID = req.body.tournamentID;
    console.log(userID, tournamentID);
    const liked = await Liked.query().insert({
        userId: userID,
        tournamentId: tournamentID, 
    });
    
    return liked;
}