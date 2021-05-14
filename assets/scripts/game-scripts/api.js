const config = require('./../config.js')
const store = require('./../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
}
