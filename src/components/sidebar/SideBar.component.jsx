import React from 'react';

import './SideBar.styles.css';

const SideBar = () => {

    return (
        <nav className="sidebar">
            <button type="button" className="btn btn-light" >Random Color</button>
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
