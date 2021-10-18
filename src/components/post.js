import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{this.props.title}</li>;
  }
}
