import React from 'react'

class ChirpProfile extends React.Component {
  constructor(props) {
    super(props)
    //this.state
  }

  render() {
    return <div className="col-sm-9">
      <div className="panel panel-default">
        <div className="panel-body">
          <textarea rows="4" cols="50" placeholder="What's happening...">
          </textarea>
          <button id="tweet" className="btn tweetbtn" type="button">Tweet</button>
        </div>
      </div>
    </div>
  }
}

export default ChirpProfile
