import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'suaSenhaSecreta';

const createToken = (payload: object) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '10d',
    algorithm: 'HS256',
  });
  return token;
};

export default {
  createToken,
};