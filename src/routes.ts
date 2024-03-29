import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();

routes.post("/user", UserController.create);
routes.get("/users", UserController.find);
routes.get("/userName", UserController.findName);

export default routes;
