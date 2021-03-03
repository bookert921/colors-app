import React from 'react';

import './ColorCard.styles.css';
import { useHistory } from 'react-router-dom';


const ColorCard = ({ id, color, hex }) => {

    const handleColorSelect = (id) => {
        useHistory.pushState(`/colors/${id}`)
    }

    return (
        <div className="card" onClick={() => handleColorSelect(id)} >
            <div className="card-img-top"
                style={{ backgroundColor: hex }}
                title={color}
                alt={color}></div>
            <div className="card-body">
                <h5 className="card-title">{hex}</h5>
            </div>
        </div>
    )
}

export default ColorCard
