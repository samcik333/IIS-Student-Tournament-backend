import { Express, Response, Request } from "express";
import { findTournament } from "../services/tournamentService/find";
import { getAll } from "../services/tournamentService/getAll";
import { getParticipants } from "../services/tournamentService/getParticipants";

export const tournaments = async (req: Request, res: Response) => {
  const result = await getAll(req.query);
  return res.status(200).send(result);
};

export const info = async (req: Request, res: Response) => {
  const id = req.params['id'];
  const result = await findTournament(id);
  if (!result) {
    return res.status(409).json({ message: "tournament does not exist" });
  } else {
    return res.status(200).send(result);
  }
};

export const participants = async (req: Request, res: Response) => {
  const result = await getParticipants(req.query.id);
  return res.status(200).json({result});
};
