const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
}

const currentMove = function (event) {
  $(event.target).data('cellIndex')
  console.log(currentMove)
}

const onPushInArray = function (event) {
  event.preventDefault()

  const currentMove = $(event.target).data('cellIndex')
  console.log(currentMove)
  console.log(store)
}

module.exports = {
  onPushInArray,
  currentMove
}
