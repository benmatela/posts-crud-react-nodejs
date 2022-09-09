const express = require("express");
const appconfig = require("./utils/appconfig");
const logging = require("./utils/logging");
const postRoutes = require("./routes/post");
const app = express();

const NAMESPACE = "Server";

/** Parse application/x-www-form-urlencoded */
app.use(express.urlencoded({ limit: "50mb", extended: false }));

/** Parse application/json */
app.use(express.json());

/** API call info */
app.use((req, res, next) => {
  logging.info(
    NAMESPACE,
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  res.on("finish", () => {
    logging.info(
      NAMESPACE,
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
    );
  });
  next();
});

/** API rules */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header(
    "Access-Control-Allow-Headers",
    "*"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

/** Routes */
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Posts API" });
});
app.use("/api/v1/", postRoutes);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("Not found");
  res.status(404).json({
    message: error.message,
    status: 404,
  });
});

app.listen(appconfig.server.port, () => {
  logging.info(
    NAMESPACE,
    `Server running on ${appconfig.server.hostname}:${appconfig.server.port}`
  );
});

module.exports = app;
