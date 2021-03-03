import React, { useState, createContext } from 'react';

export const ColorsContext = createContext();

const ColorsContextProvider = (props) => {
    const [colors, setColors] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [searchField, setSearchField] = useState('');

    return (
        <ColorsContext.Provider
            value={{
                colors,
                setColors,
                selectedColor,
                setSelectedColor,
                searchField,
                setSearchField
            }}>
            {props.children}
        </ColorsContext.Provider>
    )
}

export default ColorsContextProvider;