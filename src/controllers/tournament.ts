import {Express, Response, Request} from "express";
import {createTournament} from "../services/tournamentService/create";
import {
	findTournament,
	findTournamentByName,
} from "../services/tournamentService/find";
import {getAll} from "../services/tournamentService/getAll";
import { getBracket } from "../services/tournamentService/getBracket";
import {getParticipants} from "../services/tournamentService/getParticipants";

export const tournaments = async (req: Request, res: Response) => {
	const result = await getAll(req.query);
	return res.status(200).send(result);
};

export const info = async (req: Request, res: Response) => {
	const id = req.params["id"];
	const result = await findTournament(id);
	if (!result) {
		return res.status(409).json({message: "Tournament does not exist"});
	} else {
		return res.status(200).send(result);
	}
};

export const create = async (req: Request, res: Response) => {
	const tournamentToCreate = await findTournamentByName(req.body.name);

	if (tournamentToCreate) {
		return res
			.status(400)
			.json({message: "Tournament with that name already exist"});
	}

	const newTournament = await createTournament(req);
	if (!newTournament) {
		return res.status(409).json({message: "Tournament creation failed"});
	}
	return res.status(200).json({message: "Tournament was created"});
};

export const participants = async (req: Request, res: Response) => {
	const result = await getParticipants(req.query.id);
	return res.status(200).json({result});
};

export const bracket = async (req: Request, res: Response) => {
  const id = (req.query.id || "").toString();
  const result = await getBracket(id);
  return res.status(200).send(result);
};
