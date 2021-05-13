const productionURL = 'https://tic-tac-toe-api-production.herokuapp.com'
const developmentURL = 'https://tic-tac-toe-api-development.herokuapp.com'

const signIn = function (data) {
  return $.ajax({
    url: developmentURL + '/sign-in',
    method: 'POST',
    data
  })
}

const signUp = function (data) {
  return $.ajax({
    url: developmentURL + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  signIn,
  signUp
}
