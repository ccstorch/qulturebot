'use strict'

const express = require('express')
const Slapp = require('slapp')
const ConvoStore = require('slapp-convo-beepboop')
const Context = require('slapp-context-beepboop')
const bodyParser = require('body-parser');
var helmet = require('helmet');

// use `PORT` env var on Beep Boop - default to 3000 locally
var port = process.env.PORT || 3000

var slapp = Slapp({
  // Beep Boop sets the SLACK_VERIFY_TOKEN env var
  verify_token: process.env.SLACK_VERIFY_TOKEN,
  convo_store: ConvoStore(),
  context: Context()
})

// Imports messages
require('./src/messages')(slapp);

// attach Slapp to express server
var server = slapp.attachToExpress(express());

server.set('views', __dirname + '/src/views');
server.set('view engine', 'ejs');

// Security check
server.use(helmet());
// for parsing application/json
server.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// Imports views
require('./src/views')(server);

// Imports api
require('./src/api')(server, slapp);

// start http server
server.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${port}`)
})
