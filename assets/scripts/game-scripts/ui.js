const store = require('./../store')

const startNew = function (data) {
  store.game = data.game
  $('#message').html('<h3>New <span class="flicker">game</span> has started!</h3>')
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
  } else if (!currentGame.includes('')) {
    gameOver = true
    winningPlayer = 'CAT'
  }

  if (gameOver === true && !currentGame.includes('')) {
    $('#message').html(`<h3><span class="flicker">${winningPlayer}</span> game! Press new game button to play again</h3>`)
    $('#gameboard').css('pointer-events', 'none')
  } else if (gameOver === true) {
    $('#message').html(`<h3><span class="flicker">${winningPlayer}</span> Won The game! Press new game button to play again</h3>`)
    $('#gameboard').css('pointer-events', 'none')
  }
}

const onSetPieceSuccess = function (currentPiece) {
  event.target.innerHTML = currentPiece
  $(event.target).addClass('taken')
}

const clearBoard = function () {
  $('#gameboard > div').text('')
  $('#gameboard > div').removeClass('taken')
  $('#gameboard').css('pointer-events', 'auto')
}

module.exports = {
  startNew,
  onUpdateSuccess,
  onSetPieceSuccess,
  clearBoard
}
