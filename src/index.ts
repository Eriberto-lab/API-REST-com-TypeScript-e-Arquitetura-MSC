import userModel from './models/user.model';

const main = async () => {
  const users = await userModel.findAll();
  console.log(users);
};

main();