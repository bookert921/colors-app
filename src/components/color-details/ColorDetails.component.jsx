import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ColorsDB from '../../apis/ColorsDB';
import { ColorsContext } from '../../context/ColorsContext';

import './ColorDetails.styles.css';

const ColorDetails = () => {
    const { id } = useParams();
    const { selectedColor, setSelectedColor } = useContext(ColorsContext);

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await ColorsDB.get(`/api/v1/colors/${id}`);
                const color = await response.data.color;
                setSelectedColor(color);
            } catch (err) {
                console.error(err);
            }
        }
        fetchColors();
    }, [id, setSelectedColor]);

    const color = selectedColor.color_name;
    const hex = selectedColor.hex_value;

    return (
        <div className="showcolor-card">
            <div className="showcolor-card-img-top"
                style={{ backgroundColor: hex }}
                title={color}
                alt={color}></div>
            <div className="showcolor-card-body">
                <h5 className="showcolor-card-title">{hex}</h5>
            </div>
        </div>
    );
};

export default ColorDetails;