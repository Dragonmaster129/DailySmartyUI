import React, { Component } from "react";

import { connect } from "react-redux";
import Post from "./post";

class ResultsPosts extends Component {
  renderPosts() {
    const posts = this.props.resultsPosts.map((post, index) => {
      return <Post type="result" key={index} {...post} />;
    });
    return posts;
  }

  render() {
    return (
      <div className="results-posts">
        <div className="results-posts-wrapper">
          <ul className="results-posts-posts">{this.renderPosts()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsPosts: state.posts.resultsPosts,
  };
}

export default connect(mapStateToProps)(ResultsPosts);
