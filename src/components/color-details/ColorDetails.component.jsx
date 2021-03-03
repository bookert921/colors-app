import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ColorsDB from '../../apis/ColorsDB';
import { ColorsContext } from '../../context/ColorsContext';
import ColorCard from '../color-card/ColorCard.component';

const ColorDetails = () => {
    const { id } = useParams();
    const { selectedColor, setSelectedColor } = useContext(ColorsContext);

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await ColorsDB.get(`/api/v1/colors/${id}`);
                const color = await response.data.color
                setSelectedColor(color);
            } catch (err) {
                console.error(err);
            }
        }
        fetchColors()
    }, []);

    return (
        <div>
            <ColorCard id={id} color={selectedColor.color_name} hex={selectedColor.hex_value} />
        </div>
    );
};

export default ColorDetails;