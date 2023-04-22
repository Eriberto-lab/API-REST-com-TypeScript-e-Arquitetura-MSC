import express from 'express';
import 'express-async-errors';
import userRouter from './routers/user.router';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.listen(3000, () => console.log(`express rodando na porta ${3000}`));

app.use(userRouter);

app.use(errorMiddleware);
