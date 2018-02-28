import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts()
  }
  renderPosts() {
    return _.map(this.props.posts, e => {
      return(
        <li
          className="list-group-item"
          key={e.id}>
          {e.id}
        </li>
      )
    })
  }
  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add New Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = ({posts}) => {
  return {posts}
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
