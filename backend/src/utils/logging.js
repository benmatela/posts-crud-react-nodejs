const chalk = require("chalk");

/**
 * Displays normal logs.
 * @param namespace
 * @param message
 * @param object
 */
const info = (namespace, message, object) => {
  if (object) {
    console.info(chalk.cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object));
  } else {
    console.info(chalk.cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`));
  }
};

/**
 * Displays warning logs.
 * @param namespace
 * @param message
 * @param object
 */
const warn = (namespace, message, object) => {
  if (object) {
    console.warn(chalk.yellowBright(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object));
  } else {
    console.warn(chalk.yellowBright(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`));
  }
};

/**
 * Displays error logs.
 * @param namespace
 * @param message
 * @param object
 */
const error = (namespace, message, object) => {
  if (object) {
    console.error(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object));
  } else {
    console.error(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
  }
};

/**
 * Displays debug logs.
 * @param namespace
 * @param message
 * @param object
 */
const debug = (namespace, message, object) => {
  if (object) {
    console.debug(chalk.blue(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object));
  } else {
    console.debug(chalk.blue(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`));
  }
};

const getTimeStamp = () => {
  return new Date().toISOString();
};

module.exports = {
  info,
  warn,
  error,
  debug
};
