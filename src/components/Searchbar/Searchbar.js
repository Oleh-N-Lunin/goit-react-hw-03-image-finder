import React, { Component } from "react";
import shortid from "shortid";
import { toast } from "react-toastify";

import "../Styles/styles.css";

export default class Searchbar extends Component {
  state = {
    nameImage: "",
  };

  onValueInput = (e) => {
    this.setState({ nameImage: e.currentTarget.value.toLowerCase() });
  };

  onSubmitFetch = (e) => {
    e.preventDefault();

    if (this.state.nameImage.trim() === "") {
      toast.error("Input image name!!");

      return;
    }
    this.props.onSubmit(this.state.nameImage.trim());
    this.setState({ nameImage: "" });
  };

  render() {
    const keySearch = shortid.generate();
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitFetch}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            id={keySearch}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="name"
            value={this.state.nameImage}
            onChange={this.onValueInput}
          />
        </form>
      </header>
    );
  }
}