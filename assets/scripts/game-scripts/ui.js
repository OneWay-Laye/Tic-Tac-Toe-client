const store = require('./../store')

const startNew = function (data) {
  store.game = data.game
  $('.xPosition').hide()
  $('.oPosition').hide()
}

const onshowGameSuccess = function () {
  console.log(store.game)
}

const onshowGameFailure = function () {
  console.log('Error setting new game data')
}

const onUpdateSuccess = function (res) {
  store.game = res.game
  const currentGame = store.game.cells
  let gameOver = store.game.over
  let winningPlayer = null
  console.log(currentGame)

  if (currentGame[0] === currentGame[1] && currentGame[0] === currentGame[2] && currentGame[0] !== '') {
    gameOver = true
    winningPlayer = currentGame[0]
  } else if (currentGame[0] === currentGame[3] && currentGame[0] === currentGame[6] && currentGame[0] !== '') {
    gameOver = true
    winningPlayer = currentGame[0]
  } else if (currentGame[0] === currentGame[4] && currentGame[0] === currentGame[8] && currentGame[0] !== '') {
    gameOver = true
    winningPlayer = currentGame[0]
  } else if (currentGame[1] === currentGame[4] && currentGame[1] === currentGame[7] && currentGame[1] !== '') {
    gameOver = true
    winningPlayer = currentGame[1]
  } else if (currentGame[2] === currentGame[4] && currentGame[2] === currentGame[6] && currentGame[2] !== '') {
    gameOver = true
    winningPlayer = currentGame[2]
  } else if (currentGame[2] === currentGame[5] && currentGame[2] === currentGame[8] && currentGame[2] !== '') {
    gameOver = true
    winningPlayer = currentGame[2]
  } else if (currentGame[3] === currentGame[4] && currentGame[3] === currentGame[5] && currentGame[3] !== '') {
    gameOver = true
    winningPlayer = currentGame[3]
  } else if (currentGame[6] === currentGame[7] && currentGame[6] === currentGame[8] && currentGame[6] !== '') {
    gameOver = true
    winningPlayer = currentGame[6]
  }

  if (gameOver === true) {
    $('#message').html(`<h3>${winningPlayer} Won The game! Press new game button to play again</h3>`)
    $('#gameboard').css('pointer-events', 'none')
  }
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
  $('#gameboard > div').text = ''
  $('#gameboard > div').removeclass = 'taken'
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
