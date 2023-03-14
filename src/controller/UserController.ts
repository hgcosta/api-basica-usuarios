import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    try {
      const userExist = await User.findOne({ email });

      if (userExist) {
        return response.status(400).json({
          error: "Opss",
          message: "Usuário já existe.",
        });
      }

      const user = await User.create({
        name,
        email,
        password,
      });
      const resposta = {
        mensage: "Usuário Cadastrado com sucesso!",
        name: user.name,
        email: user.email,
      };
      return response.json(resposta);
    } catch (error) {
      return response.status(500).send({
        error:
          "Opss, houve um erro ao tentar cadastrar esse usuário, verifique os dados e tente novamente.",
        message: error,
      });
    }
  }
}

export default new UserController();
