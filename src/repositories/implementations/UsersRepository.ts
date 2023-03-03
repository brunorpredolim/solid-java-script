import { IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";

export class UsersRepository implements IUserRepository {
  private users: User[] = [
    {
      id: "23124124",
      email: "bruno@gmail.com",
      name: "bruno",
      password: "sdads",
    },
    {
      id: "23124124",
      email: "bruno123@gmail.com",
      name: "bruno",
      password: "sdads",
    },
  ];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
