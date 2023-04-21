import { RowDataPacket } from 'mysql2/promise';
import { User } from '../types/user';
import connection from '../database/connection';

// select > RowDataPacket[]
// update > OkPacket
// delete > OkPacket[]
// insert > ResultSetHeader

// retorno do execute > [data, buffers]

const findAll = async (): Promise<User[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM users');
  return rows as User[];
};

export default {
  findAll,
};