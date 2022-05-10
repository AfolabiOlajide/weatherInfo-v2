import React from 'react';

import './Nav.css'
import Cloud from '../../assets/icons/cloudy.svg'

const Nav = () => {
    return (
    <nav>
        <div className="logo">
            <img src={Cloud} alt="Weather logo" />
            <h2>Weather<span>INFO?</span></h2>
        </div>
        <div className="toggle">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
        </div>
    </nav>
    )
}

export default Nav