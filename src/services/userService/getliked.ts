import Liked from "../../models/likedTournaments";

export const getLiked = async (req:any) => {
    const userID = req.params.id;
    return await Liked.query().where('userId', userID);
}