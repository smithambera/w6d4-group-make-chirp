//Local API host to use https://polar-sea-81260.herokuapp.com/
import React from 'react'
import ReactDOM from 'react-dom'

import ChirpProfile from '../components/ChirpProfile'
import ChirpTextbox from '../components/ChirpTextbox'
import ChirpList from '../components/ChirpList'


window.renderView = function() {
  ReactDOM.render(
    <div>
      <ChirpProfile/>
      <ChirpTextbox/>
      <ChirpList/>
    </div>,
    document.querySelector('#app')
  )
}

renderView()
