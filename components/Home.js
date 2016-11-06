import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import Signup from './Signup'

class Home extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }
    render() {
        return<div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <img src="img/logo.png" alt="chirp" />
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control" required />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <Link to="/signup"><button id="signup" type="button" className="btn  btn-block">Sign Up!</button>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                  <Link to="/login">
                    <button id="/login" type="button" className="btn btn-block">Log In!</button>
                  </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    }
}

export default Home
