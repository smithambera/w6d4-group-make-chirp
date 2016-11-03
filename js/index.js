//Step 1 - Create variables for the sign in and sign up buttons
var signup = document.querySelector('#signup')
var signin = document.querySelector('#signin')

signup.addEventListener('click', signupHandler) //Create event listener to call signup function on btn click
signin.addEventListener('click', signinHandler) //Create event listener to call signin function on btn click

//Step 2 - Create function to handle signup event
function signupHandler() {

  var email = document.querySelector('#email').value //Create variable to collect the email input value for DB
  var password = document.querySelector('#password').value //Create variable to collect the password input value for DB

  // TODO: Need the path to send captured signin data to DB
  fetch('https://82e2e06a.ngrok.io/signup', {
    body: JSON.stringify({ //Converts to json format for the back-end to store...
      email: email,
      password: password
    }),
    method: 'POST', //Runs function to send data to the back-end
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(signedupHandler) //returns the API data from the back-end

}

function signedupHandler(response) {
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirply', response.user.api_token)
    // TODO: Needs to direct to the chirps view page...
    window.location.href = '/mainchirp.html'
  }

  else {
    response.forEach(function(error) {
      var errorDiv = document.createElement('div')
      errorDiv.classList.add('alert', 'alert-danger')
      errorDiv.innerHTML = error
      document.querySelector('#errors').appendChild(errorDiv)

    })
  }
}

function signinHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value

  // TODO: Need the path to send captured signin data to DB
  fetch('https://9326a318.ngrok.io/signin', {
    body: JSON.stringify({
      email: email,
      password: password
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(signedinHandler)

}

function signedinHandler(response) {
  sessionStorage.setItem('chirply', response.user.api_token)
  // TODO: Needs to direct to the chirps view page...
  window.location.href = '/mainchirp.html'
}
