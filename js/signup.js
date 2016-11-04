//Local API host to use https://82e2e06a.ngrok.io/
import React from 'react'
import ReactDOM from 'react-dom'

import Signup from '../components/Signup'

var renderView = function() {
  ReactDOM.render(
    <Signup />,
    document.querySelector('#signup')
  )
}

renderView()
