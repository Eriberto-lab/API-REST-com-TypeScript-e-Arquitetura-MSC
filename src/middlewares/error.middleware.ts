import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err: unknown, req, res, _next) => {
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'E-mail ou senha inválidos' });
  }

  return res.status(500).json({ message: 'Erro inesperado' });
};

export default errorMiddleware;