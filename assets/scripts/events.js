const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../lib/get-form-fields')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signIn(data)
    .then(console.log(data))
    .catch(console.error)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  api.signUp(data)
    .then(console.log())
    .catch(console.error())
}

module.exports = {
  onSignIn,
  onSignUp
}
