const dotenv = require("dotenv");

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "0.0.0.0";
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const CORS = process.env.CORS;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  cors: CORS,
};

const appconfig = {
  server: SERVER,
};

module.exports = appconfig;
