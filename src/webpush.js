const webpush = require("web-push");
webpush.setVapidDetails(
  "mailto:test@faztweb.com",
  "BGhCaQwZQaIkxeVOkq3-JQZikoCcJ2YyfuOXlUEX-edYhzAotI7ZcHtJfaC6ymkfD8lk6hmiQ2O0dRqOm-I8UX8",
  "W1-S7l8xW8y90iyf6rt-BE_ZG39zx7kaN_fTuGunwG4"
);

module.exports = webpush;