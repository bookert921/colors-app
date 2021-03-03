import React, { useEffect } from 'react';
import ColorsDB from '../../apis/ColorsDB';

import ColorCard from '../color-card/ColorCard.component';

import './ColorsList.styles.css';

const ColorsList = ({ colors, setColors, currentPage }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ColorsDB
                const colors = await response.data.colors
                setColors(colors);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, [setColors]);

    const allCards = [];

    colors.forEach(color => {
        const { id, color_name, hex_value } = color;
        allCards.push(<ColorCard key={id} hex={hex_value} color={color_name} />)
    })

    /* Pagination View */
    const colorsPerPage = 12
    const indexOfLastColorSet = currentPage * colorsPerPage;
    const indexOfFirstColorSet = indexOfLastColorSet - colorsPerPage;
    const currentColors = allCards.slice(indexOfFirstColorSet, indexOfLastColorSet);

    return (
        <div className="color-list">
            {currentColors}
        </div>
    );
};

export default ColorsList;
