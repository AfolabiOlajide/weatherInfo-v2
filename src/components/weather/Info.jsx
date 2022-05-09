import React from 'react';

import './Info.css'
import iconCode from './data';


const Info = (props) => {

    return (
        <div className='weather-info-container'>
            <div className="weather-icon">
                <img src={iconCode[props.icon]} alt="" />
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <div className="other-info">
                    <h2>Description: <small className='primary'>{props.description}</small></h2>
                    <h2>Humidity: <small className='warning'>{props.humidity}</small></h2>
                    <h2>Pressure: <small className='success'>{props.pressure}</small></h2>
                    <h2>Temprature: <small className='danger'>{props.temp}</small></h2>
                </div>
            </div>
        </div>
    )
}

export default Info