import React, { useContext } from 'react';
import { ColorsContext } from '../../context/ColorsContext';

import './SearchBar.styles.css';

const SearchBar = ({ placeholder }) => {
    const { searchField, setSearchField } = useContext(ColorsContext);

    const handleSearch = (e) => {
        setSearchField(e.target.value)
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
