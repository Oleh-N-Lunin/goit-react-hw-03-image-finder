import shortid from 'shortid';
import { toast } from 'react-toastify';
import React, { Component } from 'react';

import "../styles/styles.css";

class Searchbar extends Component {
    state = {
        imageName: "",
    }

    onInputValue = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase() });
    }

    onSubmitFetch = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === "") {
            toast.error("Input image name!");
            return;
        }

        this.props.onSubmit(this.state.imageName.trim());
        this.setState({ imageName: "" });
    }

    render() {
        const searchkey = shortid.generate();
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSubmitFetch}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                id={searchkey}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="name"
                value={this.state.imageName}
                onChange={this.onInputValue}
                />
                </form>
            </header>
        );
    }
}

export default Searchbar;