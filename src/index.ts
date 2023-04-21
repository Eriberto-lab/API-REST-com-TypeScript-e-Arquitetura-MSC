import userController from './controllers/user.controller';

import express from 'express';
import userRouter from './routers/user.router';

const app = express();
app.listen(3000, () => console.log(`express rodando na porta ${3000}`));

app.use(userRouter);


// const main = async () => {
//   const users = await userController.findAll;
// };

// main();

