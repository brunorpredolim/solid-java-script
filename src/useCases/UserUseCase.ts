import { IUserRepository } from "../repositories/IUserRepository";
import { User } from "../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";

class UserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async create(data: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.userRepository.save(user);
    return user;
  }

  async getUser(data: ICreateUserDTO) {
    const user = await this.userRepository.findByEmail(data.email);

    //const user = Promise<User>;
    return user;
  }
}

export { UserUseCase };
