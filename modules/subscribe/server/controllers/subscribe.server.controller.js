'use strict';

var GoogleSpreadsheet = require("google-spreadsheet"),
config = require('../../../../config/config'),
SubscribeMailer = require('./mail/subscribe.server.mailer'),
mailer = new SubscribeMailer(),
_ = require('lodash');

exports.addSubscription = function(req, res) {
  var sheet = new GoogleSpreadsheet(config.google_drive.subscribe_id);
  var email = req.body.email;
  if(!email){
    res.status(400).send('no email provided');
  } 
  else {
    sheet.useServiceAccountAuth(config.google_drive.creds, function(err1) {
      sheet.getRows(1, function(err, rows) {
        var alreadyExists = _.any(rows, function(row) {
          return row.email == email;
        });
        if(alreadyExists) {
          res.send('already subscribed');
        } else {
          // add subscription
          sheet.addRow(1, {email:email}, function(err) {
            if(err) {
              console.log(err);
              res.status(500).send('error adding subscription');
            } else {
              mailer.sendNewSubscription(email);
              res.send('subscription added');
            }
          });          
        }
      });
    });
  }  
};
