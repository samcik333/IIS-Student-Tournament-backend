import Tournament from "../../models/tournamentModel";

export const isparticipant = async (req:any) => {
	const tournamentID = req.params.tournamentID;
    const partId = req.params.partID;
	const type = req.params.type;

    if(type == 1){
	    const users = await Tournament.relatedQuery("participants").for(parseInt(tournamentID)).where("userId", parseInt(partId));
        if(!users || users.length == 0){
            return false;
        }else{
            return true;
        }
    }else if(type == 2){
        const teams = await Tournament.relatedQuery("teams").for(parseInt(tournamentID)).where("teamId", parseInt(partId));
        if(!teams || teams.length == 0){
            return false;
        }else{
            return true;
        }
    }
};
