import shortid from 'shortid';
import { toast } from 'react-toastify';
import { Component } from 'react';

class SearchBar extends Component {
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
                    <span className="SearchForm-button-label">Пошук</span>
                </button>
                <input
                id={searchkey}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Пошук зображень та фото"
                name="name"
                value={this.state.imageName}
                onChange={this.onInputValue}
                />
                </form>
            </header>
        );
    }
}