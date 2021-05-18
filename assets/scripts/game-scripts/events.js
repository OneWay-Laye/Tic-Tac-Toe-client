const api = require('./api.js')
const ui = require('./ui.js')
// const gameFunctions = require('./../functioList.js')
const store = require('./../store.js')

const winningPositions = [
  [0, 3, 6],
  [0, 1, 2],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]
let currentPiece = 'X'
const switchPiece = function () {
  if (currentPiece === 'X') {
    currentPiece = 'O'
  } else {
    currentPiece = 'X'
  }
}


const isSpaceAvailible = function (gameID, currentMove) {
  if ($(event.target).hasClass('taken')) {
    $('#message').html('<h3>Position has already been claimed, Please select another one.</h3>')
  } else {
    $('#message').html(`<h3>${currentPiece} has been placced</h3>`)
    api.updateGame(gameID, currentMove, currentPiece)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  ui.clearBoard()

  api.newGame()
    .then(ui.startNew)
    .catch(ui.onshowGameFailure)
  console.log(store)
}

const onGetGame = function (event) {
  event.preventDefault()

  api.getGames()
  ui.onshowGameSuccess()
}

const onCurrentMove = function (event) {
  const currentMove = $(event.target).data('cellIndex')
  console.log(currentMove)
  const gameID = store.game._id

  isSpaceAvailible(gameID, currentMove)

  switchPiece()
}

module.exports = {
  onCurrentMove,
  onNewGame,
  onGetGame
}
