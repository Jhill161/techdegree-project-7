import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    searchText: "",
    loading: this.props.loading
  };
  onSearchChange = e => {
    this.setState({
      searchText: e.target.value,
      loading: true
    });
  };

  // Prevent default on submit and pass searchText as the value to search, reset the search box
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  };
  // render out the search form and add onChange to input
  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          ref={input => (this.query = input)}
          name="search"
          placeholder="Search"
          required
        />
        <button type="submit" className="search-button">
          <svg
            fill="#fff"
            height="24"
            viewBox="0 0 23 23"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
        {/* if else to redirect /search if not one of the navlinks */}
        {this.props.title === "snow" ||
        this.props.title === "alaska" ||
        this.props.title === "aurora" ? (
          <Redirect exact to={`/`} />
        ) : (
          <Redirect to={`/search/${this.props.title}`} />
        )}
      </form>
    );
  }
}

export default withRouter(Search);
