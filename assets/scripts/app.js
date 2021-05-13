'use strict'

const gameEvents = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signin-modal').on('submit', gameEvents.onSignIn)
  $('#signup-modal').on('submit', gameEvents.onSignUp)
})
