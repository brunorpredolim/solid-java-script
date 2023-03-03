import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

const usersRepository = new UsersRepository();

const userUseCase = new UserUseCase(usersRepository);
const userController = new UserController(userUseCase);

export { userController };
