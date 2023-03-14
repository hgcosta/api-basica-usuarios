import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb://locahost/firstapi");

app.use(express.json());

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
