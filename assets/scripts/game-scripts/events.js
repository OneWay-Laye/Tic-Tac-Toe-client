const api = require('./api.js')
const ui = require('./ui.js')
// const gameFunctions = require('./../functioList.js')
const store = require('./../store.js')

let currentPiece = 'X'
const switchPiece = function () {
  if (currentPiece === 'X') {
    currentPiece = 'O'
  } else {
    currentPiece = 'X'
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  ui.clearBoard()
  currentPiece = 'X'

  api.newGame()
    .then(ui.startNew)
    .catch(ui.onshowGameFailure)
  console.log(store)
}

const isSpaceAvailible = function (gameID, currentMove) {
  if ($(event.target).hasClass('taken')) {
    $('#message').html('<h3>Position has already been <span class="flicker">claimed</span>, Please select another one.</h3>')
  } else {
    $('#message').html(`<h3><span class="flicker">${currentPiece}</span> has been placed</h3>`)
    ui.onSetPieceSuccess(currentPiece)
    api.updateGame(gameID, currentMove, currentPiece)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
    switchPiece()
  }
}

const onCurrentMove = function (event) {
  const currentMove = $(event.target).data('cellIndex')
  console.log(currentMove)
  const gameID = store.game._id
  $(currentMove).hover()

  isSpaceAvailible(gameID, currentMove)
}
module.exports = {
  onCurrentMove,
  onNewGame
}
