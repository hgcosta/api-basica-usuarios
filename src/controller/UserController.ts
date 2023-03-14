import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      return response.json(user);
    } catch (error) {
      return response.status(500).send({
        error: "Register Failed",
        message: error,
      });
    }
  }
}

export default new UserController();
