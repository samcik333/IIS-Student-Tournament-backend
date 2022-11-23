import { Request, Response } from "express";
import { findUserById } from "../services/userService/find";
import { updateUserInfo } from "../services/userService/update";

export const getUserId = async (req: Request, res: Response) => {
  const user = await findUserById(parseInt(req.body.id));
  return res.status(200).send(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await updateUserInfo(req);
};
