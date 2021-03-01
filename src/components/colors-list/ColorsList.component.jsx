import React from 'react';
import ColorCard from '../color-card/ColorCard.component';

import './ColorsList.styles.css';

const ColorsList = ({ searchField, colorsList, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    const cards = [];
    colorsList.forEach(color => {
        const { id, color_name, hex_value } = color;
        if (color_name.toLowerCase().indexOf(searchField.toLowerCase()) === -1) {
            return;
        }
        cards.push(<ColorCard key={id} hex={hex_value} color={color_name} />);
    })
    return (
        <div className="container">
            {cards}
        </div>
    );
};

export default ColorsList;
