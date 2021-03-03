import React, { useState, createContext } from 'react';

export const ColorsContext = createContext();

const ColorsContextProvider = (props) => {
    const [colors, setColors] = useState([]);
    const [searchField, setSearchField] = useState('');

    return (
        <ColorsContext.Provider value={{ colors, setColors, searchField, setSearchField }}>
            {props.children}
        </ColorsContext.Provider>
    )
}

export default ColorsContextProvider;