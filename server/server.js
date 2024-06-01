import app from "./src/app.js";
import colors from "colors";

import { config } from "./src/config/config.js";
import connectToDB from "./src/config/db.js";

const startServer = async () => {
  try {
    connectToDB();

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`.bgMagenta.white);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
