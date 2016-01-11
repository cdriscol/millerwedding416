'use strict';

var mandrill = require('mandrill-api/mandrill'),
config = require('../../../../../config/config');

var RsvpMailer = function() {
  var mandrill_client = new mandrill.Mandrill(config.mandrill.api_key);

  this.sendNewRsvp = function(rsvp) {
      console.log(config.mandrill);
    var message = {
      "subject": rsvp.firstName + ' ' + rsvp.lastName + ' has just RSVP\'d!',
      "from_email": 'millerwedding416@gmail.com',
      "from_name": 'New RSVP',
      "to": [{"email":"millerwedding416@gmail.com"}],
      "track_opens": true,
      "text": rsvp.firstName + ' ' + rsvp.lastName + ' RSVP\'d with ' + rsvp.guests + ' guests.'
    };

    mandrill_client.messages.send({"message": message, "async": false},
      function(result) {
        console.log(result);
      },
      function(err) {
        console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message);
    });
  };
};

module.exports = RsvpMailer;
