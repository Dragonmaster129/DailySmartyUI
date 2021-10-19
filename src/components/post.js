import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const associated_topics = this.props.associated_topics.map(
      (topic, index) => {
        return (
          <span className="post-topic" key={index}>
            {topic}
          </span>
        );
      }
    );
    return (
      <li className="recent-post">
        <div className="recent-post-title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="recent-post-topics">{associated_topics}</div>
      </li>
    );
  }
}
