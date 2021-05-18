const config = require('./../config.js')
const store = require('./../store')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {}
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateGame = function (gameID, cellIndex, cellValue) {
  console.log(gameID)
  return $.ajax({
    url: config.apiUrl + '/games/' + gameID,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: cellValue
        },
        over: false
      }
    }
  })
}

module.exports = {
  newGame,
  getGames,
  updateGame
}
