//Local API host to use https://82e2e06a.ngrok.io/
import React from 'react'
import ReactDOM from 'react-dom'

import PhotoUploader from '../components/'
import PhotoDisplayer from '../components/'

window.renderView = function() {
  ReactDOM.render(
    <div>
      </>
      </>
    </div>,
    document.querySelector('#app')
  )
}

renderView()
