import { config } from "../config/config.js";

const handleError = (err, req, res, next) => {
  const status = req.status || 500;
  const message = req.message || "Something went wrong";

  res.status(status).json({
    success: false,
    status: status,
    message: message,
    stack: config.env === "development" ? err.stack : null,
  });

  next();
};

export default handleError;
