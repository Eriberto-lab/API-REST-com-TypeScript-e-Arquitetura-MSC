import { User } from '../types/user';
import userModel from '../models/user.model';
import token from '../utils/token';

const findAll = async (): Promise<User[]> => {
  const user = await userModel.findAll();

  return user;
};

const login = async (email: string, password: string): Promise<string> => {
  const user = await userModel.findByEmail(email);

  if (!user || password !== user.password) {
    throw new Error('UNAUTHORIZED');
  }

  const jwtToken = token.createToken(user);
  return jwtToken;
};

export default {
  findAll,
  login,
};