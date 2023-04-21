import userService from './services/user.service';

const main = async () => {
  const users = await userService.findAll();
  console.log(users);
};

main();