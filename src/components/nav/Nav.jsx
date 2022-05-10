import React, { useState } from 'react';

import './Nav.css'
import Cloud from '../../assets/icons/cloudy.svg'

const Nav = () => {
    const [lightMode, setLightMode] = useState(true)
    const changeModeHandler = () => {
        document.body.classList.toggle('dark-theme-variables');
        setLightMode(!lightMode)
    }

    return (
    <nav>
        <div className="logo">
            <img src={Cloud} alt="Weather logo" />
            <h2>Weather<span>INFO?</span></h2>
        </div>
        <div onClick={changeModeHandler} className="toggle">
            <span className={`material-icons-sharp ${lightMode ? 'active' : ''} `}>light_mode</span>
            <span className={`material-icons-sharp ${lightMode ? '' : 'active'} `}>dark_mode</span>
        </div>
    </nav>
    )
}

export default Nav