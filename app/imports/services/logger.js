import _ from 'lodash';
import config from '/imports/config/index';
const Winston = Npm.require('winston'); // Couldn't get Winston to work with ES6 imports
Npm.require('winston-papertrail').Papertrail
// Colours for debug levels
// Winston.addColors({
//   debug: 'orange',
//   verbose: 'cyan',
//   info: 'green',
//   error: 'red',
//   warn: 'yellow'
// });
// Log level
const logLevel = _.get(config, 'logLevel');
// Papertrail logger
const winstonPapertrail = new Winston.transports.Papertrail({
  host: _.get(config, 'papertrail.host'),
  port: _.get(config, 'papertrail.port'),
  level: logLevel,
  prettyPrint: true,
  colorize: true
});

winstonPapertrail.on('error', (err) => {
  console.log(`#45t – Couldn't Bootstrap Winston logger: ${err}`);
});
// Console logger
const logger = new Winston.Logger({
  transports: [
    winstonPapertrail,
    new Winston.transports.Console({
      level: logLevel,
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: false
    })
  ]
});
// Protect your users privacy — use log rewriters
function rewriters() {
  return {
    maskEmail: () => {
      return null;
    }
  }
}
logger.rewriters.push((level, msg, meta) => {
  if (meta.email) meta.email = rewriters.maskEmail();
  return meta;
});
// Development: Output only to console // Production: Output only to papertrail
_.get(config, 'isDev') ? logger.remove(winstonPapertrail) : logger.remove(Winston.transports.Console);

logger.info(`Logger initialised @ ${logLevel} level`);

export default logger;