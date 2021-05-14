const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const onPageLoad = function (event) {
  ui.onLoad()
}

const onInUpFormLoad = function (event) {
  event.preventDefault()

  ui.onFormLoad()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  ui.onSignOutSuccess()
}

module.exports = {
  onPageLoad,
  onInUpFormLoad,
  onSignIn,
  onSignUp,
  onSignOut
}
