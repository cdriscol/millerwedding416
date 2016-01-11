'use strict';

module.exports = function (app) {
  var rsvp = require('../controllers/rsvp.server.controller');
  app.route('/rsvp').post(rsvp.submit);
  app.route('/rsvp/oneInvites').get(rsvp.getOneInvites);
};
