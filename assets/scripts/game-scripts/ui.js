const store = require('./../store')

const startNew = function (data) {
  store.game = data.game
}

const onshowGameSuccess = function () {
  console.log(store.game)
}

const onshowGameFailure = function () {
  console.log('Error setting new game data')
}

const onUpdateSuccess = function (res) {
  store.game = res.game
  console.log(store)
}

const onUpdateFailure = function () {
  console.error
}

const onSetPieceSuccess = function (currentPiece) {
  event.target.innerHTML = currentPiece
  $(event.target).addClass('taken')
}

const onSetPieceFailure = function () {
  $(event.target).hasClass('taken')

}

const clearBoard = function () {
  $('.xPosition').hide()
  $('.oPosition').hide()
  $('#gameboard').css('pointer-events', 'auto')
}

module.exports = {
  startNew,
  onshowGameSuccess,
  onshowGameFailure,
  onUpdateFailure,
  onUpdateSuccess,
  onSetPieceSuccess,
  onSetPieceFailure,
  clearBoard
}
