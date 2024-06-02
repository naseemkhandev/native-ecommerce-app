import path from "path";
import dataURIParser from "datauri/parser.js";

const getDataUri = (file) => {
  const parser = new dataURIParser();
  const ext = path.extname(file.originalname).toString();
  return parser.format(ext, file.buffer);
};

export default getDataUri;
