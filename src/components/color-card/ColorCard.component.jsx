import React from 'react';

import './ColorCard.styles.css'

const ColorCard = ({ color, hex }) => {
    return (
        <div className="card" >
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
