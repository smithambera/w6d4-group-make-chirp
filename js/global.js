//Local API host to use https://82e2e06a.ngrok.io/
import React from 'react'
import ReactDOM from 'react-dom'

import ChirpProfile from '../components/ChirpProfile'
import ChirpTextbox from '../components/ChirpTextbox'


window.renderView = function() {
  ReactDOM.render(
    <div>
      <ChirpProfile/>
      <ChirpTextbox/>
    </div>,
    document.querySelector('#app')
  )
}

renderView()
