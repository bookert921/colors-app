import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ColorsContext } from '../../context/ColorsContext';

import './SideBar.styles.css';

const SideBar = () => {
    const { colors } = useContext(ColorsContext);
    let history = useHistory();


    const showRandomColor = (colors) => {
        const choices = [];
        const random = Math.floor(Math.random() * 100);
        colors.forEach(color => {
            choices.push(color.id);
        })
        history.push(`/colors/${choices[random]}`)
    }

    return (
        <nav className="sidebar">
            <button
                type="button"
                className="btn btn-light"
                onClick={() => showRandomColor(colors)}
            >
                Random Color
            </button>
            <div className="link-container">
                <a href="!#" className="color-link" ><h6>Red</h6></a>
                <a href="!#" className="color-link" ><h6>Orange</h6></a>
                <a href="!#" className="color-link" ><h6>Yellow</h6></a>
                <a href="!#" className="color-link" ><h6>Green</h6></a>
                <a href="!#" className="color-link" ><h6>Blue</h6></a>
                <a href="!#" className="color-link" ><h6>Purple</h6></a>
                <a href="!#" className="color-link" ><h6>Brown</h6></a>
                <a href="!#" className="color-link" ><h6>Gray</h6></a>
            </div>
        </nav>
    )
}

export default SideBar
