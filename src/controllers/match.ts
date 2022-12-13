import { Express, Response, Request } from "express";
import { saveMatch } from "../services/matchService/create";
import { getMacth } from "../services/matchService/getMatch";
import { updateMatch } from "../services/matchService/update";


export const match = async (req: Request, res: Response) => {
    const match = await getMacth(req.params['id']);
    if (!match) {
      return res.status(409).json({ message: "Match does not exist" });
    } else {
      return res.status(200).send(match);
    }
};

export const createMatch = async (req: Request, res: Response) => {;
	const newMatch = await saveMatch(req);
	if (!newMatch) {
		return res.status(409).json({ message: "Match creation failed" });
	}
	return res.status(200).send(newMatch);
};

export const update = async (req: Request, res: Response) => {
	const match = await updateMatch(req);
	console.log(match);
	return res.status(200).send({match});
};