'use strict';

var creds = require('../../../config.json');

module.exports = {
  app: {
    title: 'Miller Wedding 2016 | Michelle Place and Nate Miller',
    description: 'Nate Miller and Michelle Place wedding April 16th, 2016',
    keywords: 'miller, wedding, nate, michelle, place, 2016',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: 'millerwedding416',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  logo: 'modules/core/client/img/brand/logo.png',
  favicon: 'modules/core/client/img/brand/favicon.ico',
  google_drive: {
    creds: creds,
    subscribe_id: process.env.MW_GMAIL_SUBSCRIBE,
    rsvp_id: process.env.MW_GMAIL_RSVP,
    invite_id: process.env.MW_GMAIL_INVITE
  },
  mandrill: {
    api_key: process.env.MW_MANDRILL_KEY
  }
};
