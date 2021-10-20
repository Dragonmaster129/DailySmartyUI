import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log("Searching for", query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
