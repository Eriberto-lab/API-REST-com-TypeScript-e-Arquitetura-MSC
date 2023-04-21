import { User } from "../types/user";
import userModel from "../models/user.model";

const findAll = async (): Promise<User[]> => {
    const user = await userModel.findAll();

    return user;
}

export default {
    findAll,
}