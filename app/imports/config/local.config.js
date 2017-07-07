import { Meteor } from "meteor/meteor";

export default {
  "isDev": Meteor.isDevelopment,
  "papertrail": {
    "host": "logs4.papertrailapp.com",
    "port": "36436"
  },
  "logLevel": "debug"
};
