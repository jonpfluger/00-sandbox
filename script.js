var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

// can give arguments
// firstNameEl.val("Test")

function handleSubmit(event) {
  event.preventDefault()

  // vanilla js
  // firstNameEl.value
  // jquery
  var firstName = firstNameEl.val()
  var lastName = lastNameEl.val()
  var email = emailEl.val()
  var github = githubEl.val()

  // send data somewhere

  firstNameEl.val("")
  lastNameEl.val("")
  emailEl.val("")
  githubEl.val("")


}

formEl.on('submit', handleSubmit)
