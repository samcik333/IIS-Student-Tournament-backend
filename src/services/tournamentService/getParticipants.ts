import { ParsedQs } from "qs";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const getParticipants = async (query: ParsedQs) => {
    const value = '%' + query.id + '%';
    const users = User.relatedQuery('users-tournaments-teams').for('tournamentId').where('tournamentId', 'like', value);
    const teams = Team.relatedQuery('users-tournaments-teams').for('tournamentId').where('tournamentId', 'like', value);
    return (await users).concat(await teams);
}