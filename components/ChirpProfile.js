import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state
  }

  render() {
    return <div class="col-sm-3">
      <div class="panel panel-default">
        <div class="panel-body">
          <img src="img/logo.png" alt="profile pic" />
          <div class="row">
            <div class="col-sm-12 text-center">
              <h5>Name</h5>
              <h5>Email</h5>
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 text-left ">
              Following
            </div>
            <div class="col-xs-6 text-right">
              Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ChirpProfile
