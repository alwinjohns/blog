import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostNew extends Component {
  render() {
    return(
      <div>
        new...
        <Link to="/">Back</Link>
      </div>
    )
  }
}

export default PostNew
