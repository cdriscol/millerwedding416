'use strict';

var mandrill = require('mandrill-api/mandrill'),
config = require('../../../../../config/config');

var SubscribeMailer = function() {
  var mandrill_client = new mandrill.Mandrill(config.mandrill.api_key);
  
  this.sendNewSubscription = function(subscriber) {
    var message = {
      "subject": subscriber + ' wants to be updated, yo!',
      "from_email": 'millerwedding416@gmail.com',
      "from_name": 'New Subscription',
      "to": [{"email":"millerwedding416@gmail.com"}],
      "track_opens": true,
    };
    
    mandrill_client.messages.send({"message": message, "async": false}, 
      function(result) {
        console.log(result);
      },
      function(err) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });
  };
}

module.exports = SubscribeMailer;
