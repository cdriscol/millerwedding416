'use strict';

var GoogleSpreadsheet = require("google-spreadsheet"),
    config = require('../../../../config/config'),
    SubscribeMailer = require('./mail/rsvp.server.mailer'),
    mailer = new SubscribeMailer(),
    _ = require('lodash');

exports.getOneInvites = function(req, res) {
    var sheet = new GoogleSpreadsheet(config.google_drive.invite_id);
    sheet.useServiceAccountAuth(config.google_drive.creds, function(err1) {
        if(err1) {
            console.log('err1', err1);
            res.json([]);
        } else {
            sheet.getRows(1, function(err, row_data){
                console.log(err);
                console.log(row_data);
                res.json(row_data);
            });
        }
    });
};

exports.submit = function(req, res) {
  var rsvp = req.body;
  console.log(rsvp);

    var sheet = new GoogleSpreadsheet(config.google_drive.rsvp_id);
    sheet.useServiceAccountAuth(config.google_drive.creds, function(err1) {
        // add rsvp
        sheet.addRow(1, rsvp, function(err) {
          if(err) {
            console.log(err);
            res.status(500).send('error adding rsvp');
          } else {
            mailer.sendNewRsvp(rsvp);
            res.send('rsvp added');
          }
        });
    });
};
