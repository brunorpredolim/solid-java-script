import { UserUseCase } from "./UserUseCase";
import { Request, Response } from "express";

class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async handleCreate(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const user = await this.userUseCase.create({
        name,
        email,
        password,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async handleGet(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.query;

    try {
      const user = await this.userUseCase.getUser({
        name: "",
        email: request.query.email.toString(),
        password: "",
      });
      
      return response.status(200).json(user);
    } catch (err) {
      // return response.status(400).json({
      //   message: err.message || "Unexpected error.",
      // });
    }
  }
}

export { UserController };
