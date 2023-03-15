import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const User = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

User.pre("save", async function (next) {
  const hashadPassword = await bcrypt.hash(this.password, 12);
  this.password = hashadPassword;

  next();
});

export default mongoose.model("User", User);
