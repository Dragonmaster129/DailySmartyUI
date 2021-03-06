import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  renderTopics() {
    let topics = this.props.associated_topics.map((topic, index) => {
      if (index < 3) {
        return (
          <span className="post-topic" key={index}>
            {topic}
          </span>
        );
      }
    });
    return topics;
  }

  getNameForPostLink(str) {
    let n = str.lastIndexOf("/");
    let link = str.substring(n + 1, str.length);

    if (n + 1 == str.length) {
      link = str.slice(0, n);
      n = link.lastIndexOf("/");

      link = link.substring(n + 1, link.length);
    }

    if (link.includes(".html")) {
      link = link.substring(0, link.length - 5);
    }

    if (link.includes(".htm")) {
      link = link.substring(0, link.length - 4);
    }

    return link;
  }

  renderLinks() {
    let links = this.props.post_links.map((link, index) => {
      return (
        <div className="post-link" key={index}>
          <div className="post-link-box"></div>
          <div className="post-link-link">
            <a href={link.link_url}>{this.getNameForPostLink(link.link_url)}</a>
          </div>
        </div>
      );
    });
    if (links == 0) {
      return <div className="no-content">No Post Links</div>;
    }

    return links;
  }

  render() {
    if (this.props.type == "recent") {
      return (
        <li className="recent-post">
          <div className="recent-post-title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="recent-post-topics">{this.renderTopics()}</div>
        </li>
      );
    } else if (this.props.type == "result") {
      return (
        <li
          className="result-post"
          onMouseEnter={() => this.setState({ height: 70 })}
          onMouseLeave={() => this.setState({ height: 0 })}
        >
          <div className="result-post-topics">{this.renderTopics()}</div>
          <div className="result-post-title">
            <a href={this.props.url_for_post}>{this.props.title}</a>
          </div>
          <AnimateHeight duration={500} height={this.state.height}>
            <div className="result-post-links">{this.renderLinks()}</div>
          </AnimateHeight>
        </li>
      );
    }
  }
}
