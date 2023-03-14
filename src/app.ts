import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/firstapi")
  .then(() => console.log("Conexão com o MongoDB estabelecida com sucesso!"))
  .catch((err) => console.error("Erro ao conectar com o MongoDB:", err));

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
