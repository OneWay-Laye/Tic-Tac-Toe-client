const store = require('./../store')

const onLoad = function () {
  $('#in-up-form').hide()
  $('#out-button').hide()
  $('#newGame-button').hide()
  $('#gameboard').addClass('noClick')
  $('#showGame-button').hide()
}

const onFormLoad = function () {
  $('#in-up-form').show()
  $('#signup-form').show()
}

const onSignInSuccess = function (res) {
  $('#message').html('<h3><span class="flicker">Welcome</span>, enjoy the game!</h3>')
  store.user = res.user
  console.log(store.user)
  $('#signin-form').trigger('reset')
  $('#in-up-form').hide()
  $('#in-up-button').hide()
  $('#out-button').show()
  $('#newGame-button').show()
  $('#signin-form').removeClass('col-12')
  $('#gameboard').removeClass('noClick').addClass('canClick')
}

const onSignInFailure = function () {
  $('#message').html('<h3>Error signing in. Please try Again</h3>')
  $('#signin-form').addClass('red-error')
}

const onSignUpSuccess = function () {
  $('#message').html('<h3>Account successfully created. Now sign in below.</h3>')
  $('#signup-form').hide()
  $('#signup-form').trigger('reset')
  $('#signin-form').addClass('col-12')
}

const onSignUpFailure = function () {
  $('#message').html('<h3>Error creating you account try another email</h3>')
  $('#signup-form').addClass('red-error')
}

const onSignOutSuccess = function () {
  store.user = null
  $('#in-up-button').show()
  $('#out-button').hide()
  $('#message').html('<h3>Account successfully signed out. Sign in to play.</h3>')
  $('#newGame-button').hide()
  $('#gameboard').removeClass('canClick').addClass('noClick')
}

module.exports = {
  onLoad,
  onFormLoad,
  onSignInSuccess,
  onSignInFailure,
  onSignUpSuccess,
  onSignUpFailure,
  onSignOutSuccess
}
