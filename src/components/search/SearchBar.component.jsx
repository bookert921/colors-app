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
                className="form-control me-2"
                type="search"
                ariaLabel="Search"
                value={searchField}
                placeholder={placeholder}
                onChange={handleSearch} />
        </form>
    );
};

export default SearchBar;
