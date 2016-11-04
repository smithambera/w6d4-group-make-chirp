//Step 1 - Create variables for the sign in and sign up buttons
var upload = document.querySelector('#uploadSignup')

upload.addEventListener('click', uploadHandler) //Create event listener to call signin function on btn click

//Create 2 - Create function to handle Upload event
function uploadHandler() {
  // Create variables to collect Sign Up Information
  var name = document.querySelector('#nameSignup').value //Create variable to collect the email input value for DB
  var email = document.querySelector('#emailSignup').value //Create variable to collect the email input value for DB
  var password = document.querySelector('#passwordSignup').value //Create variable to collect password input value for DB
  var photo = document.querySelector('#photoSignup').value //Create variable to collect photo input value for DB

  //Post Sign Up information to the API
  fetch('https://70d64e2c.ngrok.io/signup', {
    body: JSON.stringify({ //Converts to json format for the back-end to store...
      username: name,
      email: email,
      password: password,
    }),
    method: 'POST', //Runs function to send data to the back-end
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  // .then(response => console.log(response))
  .then(uploadedHandler) //returns the API data from the back-end
}
function uploadedHandler(response) {
  console.log(response)
  if (typeof response.user != 'undefined') {
    sessionStorage.setItem('chirply', response.api_token)
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
