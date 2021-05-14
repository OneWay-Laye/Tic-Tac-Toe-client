'use strict'

const userEvents = require('./user-scripts/events.js')
const gameEvents = require('./game-scripts/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  // page load events
  $(document).ready(userEvents.onPageLoad)

  // User Events
  $('#in-up-button').on('click', userEvents.onInUpFormLoad)
  $('#signin-form').on('submit', userEvents.onSignIn)
  $('#signup-form').on('submit', userEvents.onSignUp)
  $('#out-button').on('click', userEvents.onSignOut)

  // Game events
  $('#gameboard').on('click', gameEvents.onPushInArray)
  $('#newGame-button').on('click,' gameEvents.onNewGame)
})
