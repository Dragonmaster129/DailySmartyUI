import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>
          <div className="recent-posts-posts">
            <ul>
              <li>recent post 0</li>
              <li>recent post 1</li>
              <li>recent post 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
