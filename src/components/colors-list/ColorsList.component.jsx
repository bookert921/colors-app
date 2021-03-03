import React, { useEffect, useState, useContext } from 'react';
import { ColorsContext } from '../../context/ColorsContext';

import ColorsDB from '../../apis/ColorsDB';
import ColorCard from '../color-card/ColorCard.component';

import './ColorsList.styles.css';

const ColorsList = ({ colors, setColors, currentPage }) => {
    const { searchField } = useContext(ColorsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await ColorsDB.get('/api/v1/colors')
                const colors = await response.data.colors
                setColors(colors);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData()
    }, [setColors]);

    if (loading) {
        return (
            <div
                style={{ margin: '15%' }}
                className="d-flex justify-content-center">
                <div
                    style={{ width: '10rem', height: '10rem', fontSize: '50px' }}
                    className="spinner-border"
                    role="status">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </div>
            </div>
        )
    }

    const allCards = [];

    colors.forEach(color => {
        const { id, color_name, hex_value } = color;
        if (color_name.toLowerCase().indexOf(searchField.toLowerCase()) === -1) {
            return;
        }
        if (searchField) {
            allCards.push(<ColorCard key={id} hex={hex_value} color={color_name} />)
        } else {
            allCards.push(<ColorCard key={id} hex={hex_value} color={color_name} />)
        }
    })

    /* Pagination View */
    const colorsPerPage = 12
    const indexOfLastColorSet = currentPage * colorsPerPage;
    const indexOfFirstColorSet = indexOfLastColorSet - colorsPerPage;
    const paginationView = allCards.slice(indexOfFirstColorSet, indexOfLastColorSet);


    return (
        <div className="color-list">
            {searchField ? allCards : paginationView}
        </div>
    );
};

export default ColorsList;
