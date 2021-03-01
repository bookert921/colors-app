import React from 'react';

import SearchBar from '../search/SearchBar.component.jsx';

import logo from '../../assets/logo-symbol.svg';
import './Header.styles.css';

const Header = ({ searchField, searchFunction }) => {
    return (
        <nav className="navbar" >
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={logo} alt="" />
                </div>
                <SearchBar
                    placeholder="Search"
                    searchField={searchField}
                    searchFunction={searchFunction} />
            </div>
        </nav>
    )
}

export default Header
