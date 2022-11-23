import { Request } from "express";
import User from "../../models/userModel";
import encryptPassword from "../registerService/cryptPassword";

export const updateUserInfo = async (req: Request) => {
  let { name, lastname, username, email, password, photo } = req.body;
  if (password) {
    password = await encryptPassword(password);
  }
  return await User.query()
    .findById(req.body.id)
    .update({ name, lastname, username, email, password, photo });
};
