import React from 'react';
import ColorCard from '../color-card/ColorCard.component';

import './ColorsList.styles.css';

const ColorsList = ({ searchField, colorsList, loading, colors }) => {
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

    const paginationView = [];
    const allCards = [];

    const showSwatches = (searchField) => {
        if (searchField !== null) {
            colors.forEach(color => {
                const { id, color_name, hex_value } = color;
                if (color_name.toLowerCase().indexOf(searchField.toLowerCase()) === -1) {
                    return;
                }
                allCards.push(<ColorCard key={id} hex={hex_value} color={color_name} />)
            })
        }
    }

    colorsList.forEach(color => {
        const { id, color_name, hex_value } = color;
        paginationView.push(<ColorCard key={id} hex={hex_value} color={color_name} />);
    })

    showSwatches(searchField);

    return (
        <div className="color-list">
            {searchField ? allCards : paginationView}
        </div>
    );
};

export default ColorsList;
