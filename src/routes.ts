import { Router } from "express";
import { User } from "./entities/User";
import { userController } from "./useCases";

const routes = Router();

routes.get("/user/", (request, response) => {
  return userController.handleGet(request, response);
});

routes.post("/", (request, response) => {
  return userController.handleCreate(request, response);
});

export { routes };
