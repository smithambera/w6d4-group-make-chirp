//Step 1 - Create variables for the sign in and sign up buttons
// var signup = document.querySelector('#signup') //May need to remove and just use Upload
// var signin = document.querySelector('#signin')
var upload = document.querySelector('#uploadSignup')

// signup.addEventListener('click', signupHandler) //Create event listener to call signup function on btn click
// signin.addEventListener('click', signinHandler) //Create event listener to call signin function on btn click
upload.addEventListener('click', uploadHandler) //Create event listener to call signin function on btn click

//Step 2 - Create function to handle signup event
function signupHandler() {

  var email = document.querySelector('#email').value //Create variable to collect the email input value for DB
  var password = document.querySelector('#password').value //Create variable to collect the password input value for DB

  // TODO: Need the path to send captured signin data to DB
  fetch('https://70d64e2c.ngrok.io/api/signup', {
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
  console.log(response)
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirply', response.user.api_token)
    // TODO: Needs to direct to the chirps view page...
    window.location.href = './index.html'
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

//Create 3 - Create function to handle signin event
function signinHandler() {

  var email = document.querySelector('#email').value
  var password = document.querySelector('#password').value

  // TODO: Need the path to send captured signin data to DB
  fetch('https://70d64e2c.ngrok.io/login', {
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
  console.log(response)
  sessionStorage.setItem('chirply', response.user.api_token)
  // TODO: Needs to direct to the chirps view page...
  window.location.href = './mainchirp.html'
}

//Create 4 - Create function to handle Upload event
function uploadHandler() {
  // Create variables to collect Sign Up Information
  var name = document.querySelector('#nameSignup').value //Create variable to collect the email input value for DB
  var email = document.querySelector('#emailSignup').value //Create variable to collect the email input value for DB
  var password = document.querySelector('#passwordSignup').value //Create variable to collect password input value for DB
  var photo = document.querySelector('#photoSignup').value //Create variable to collect photo input value for DB

  //Post Sign Up information to the API
  fetch('https://70d64e2c.ngrok.io/api/signup', {
    body: JSON.stringify({ //Converts to json format for the back-end to store...
      name: name,
      email: email,
      password: password,
    }),
    method: 'POST', //Runs function to send data to the back-end
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .then(uploadedHandler) //returns the API data from the back-end
}
function uploadedHandler(response) {
  console.log(response)
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirply', response.user.api_token)
    // TODO: Needs to direct to the chirps view page...
    window.location.href = './index.html'
  }
  //
  // else {
  //   response.forEach(function(error) {
  //     var errorDiv = document.createElement('div')
  //     errorDiv.classList.add('alert', 'alert-danger')
  //     errorDiv.innerHTML = error
  //     document.querySelector('#errors').appendChild(errorDiv)
  //
  //   })
  // }
}
