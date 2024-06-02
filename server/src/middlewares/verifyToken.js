import jwt from "jsonwebtoken";

import createError from "../utils/createError.js";
import { config } from "../config/config.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return next(createError(401, "Unauthorized User"));

    jwt.verify(token, config.jwtSecret, (err, user) => {
      if (err) return next(createError(403, "User not authenticated"));

      req.user = user;
    });

    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
