import Liked from "../../models/likedTournaments";

export const getLiked = async (req:any) => {
    const userID = req.params.id;
    const liked = await Liked.query().where('userId', userID);
    const likedTournaments: number[] = [];
    liked.forEach(element => {
        likedTournaments.push(element.tournamentId);
    });
    return likedTournaments;
}