//Local API host to use https://polar-sea-81260.herokuapp.com/
import { Router, Route, Link, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'

import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Main from '../components/Main'
import FollowList from '../components/FollowList'

/* NOTE: NEED TO MOVE THESE OVER UNDER THE MAIN PATH
// import ChirpProfile from '../components/ChirpProfile'
// import ChirpTextbox from '../components/ChirpTextbox'
// import ChirpList from '../components/ChirpList'
*/

/* NOTE: MAY NEED THESE LATER IN CODING
//import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState'
*/

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/main' component={Main} />
      <Route path='/followlist' component={FollowList} />
    </Router>
), document.getElementById('homePage'))
