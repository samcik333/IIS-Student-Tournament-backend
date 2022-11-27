import Tournament from "../../models/tournamentModel";

export const getParticipants = async (id:any) => {
    const value = Number(id);
    const users = await Tournament.relatedQuery('players').for(value);
    if(users.length != 0){
        return {users, type:"users"};
    }else{
        const teams = await Tournament.relatedQuery('teams').for(value);
        return {teams, type:"teams"};
    }
}