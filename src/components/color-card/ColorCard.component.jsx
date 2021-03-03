import React from 'react';
import { useHistory } from 'react-router-dom';

import './ColorCard.styles.css';


const ColorCard = ({ id, color, hex }) => {
    let history = useHistory();

    const handleColorSelect = (id) => {
        history.push(`/colors/${id}`)
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
