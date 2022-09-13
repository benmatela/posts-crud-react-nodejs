const dotenv = require("dotenv");

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "0.0.0.0";
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const CORS = process.env.CORS;
const JSON_PLACEHOLDER_API_URL = string = process.env.JSON_PLACEHOLDER_API_URL || 'https://jsonplaceholder.typicode.com';

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  cors: CORS,
  jsonPlaceholderApiUrl: JSON_PLACEHOLDER_API_URL
};

const appconfig = {
  server: SERVER,
};

module.exports = appconfig;
