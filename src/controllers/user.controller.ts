import { Request, Response } from "express";
import userService from "../services/user.service";

const findAll = async (_req: Request, res: Response) => {
    const users = await userService.findAll();
    console.log(users)
    return res.status(200).json({message: users});
}

export default {
    findAll,
}