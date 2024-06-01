import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

const generateToken = (userId, isAdmin, res) => {
  const token = jwt.sign({ userId, isAdmin }, config.jwtSecret, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 15,
    sameSite: "strict",
    secure: config.env === "production",
  });

  return token;
};

export default generateToken;
