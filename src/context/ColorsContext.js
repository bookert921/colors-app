import React, { useState, createContext } from 'react';

export const ColorsContext = createContext();

const ColorsContextProvider = (props) => {
    const [colors, setColors] = useState([]);

    return (
        <ColorsContext.Provider value={{ colors, setColors }}>
            {props.children}
        </ColorsContext.Provider>
    )
}

export default ColorsContextProvider;