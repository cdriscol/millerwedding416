'use strict';

module.exports = function (app) {
  var subscribe = require('../controllers/subscribe.server.controller');
  app.route('/subscribe').post(subscribe.addSubscription);
};
