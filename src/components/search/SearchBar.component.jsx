import React from 'react';

import './SearchBar.styles.css';

const SearchBar = ({
    searchFunction,
    searchField,
    placeholder }) => {

    const handleSearch = (e) => {
        searchFunction(e.target.value)
    }

    return (
        <form>
            <input
                className="form-control"
                type="search"
                aria-label="Search"
                value={searchField}
                placeholder={placeholder}
                onChange={handleSearch} />
        </form>
    );
};

export default SearchBar;