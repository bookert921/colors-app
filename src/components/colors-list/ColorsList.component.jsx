import React from 'react';
import ColorCard from '../color-card/ColorCard.component';

import './ColorsList.styles.css';

const ColorsList = ({ searchField, colorsList, loading }) => {
    /* LOADER */
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div
                    className="spinner-border"
                    role="status">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
            </div>
        )
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
        <div className="color-list">
            {cards}
        </div>
    );
};

export default ColorsList;
