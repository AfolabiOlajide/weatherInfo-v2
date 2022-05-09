import React, { useState } from 'react';

import Search from './Search';
import Info from './Info';
import './Weather.css'

const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        name: '',
        icon: '',
        description: '',
        humidity: '',
        presure: '',
        temprature: ''
    })
    const API_KEY = 'c2cb06d21e8bc851cdc844acd44fa94b';

    const fetchWeatherData = (country) => {
        const data = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=imperial`);
            const data = await response.json()
            console.log(country);
            console.log(data);

            setWeatherInfo({
                name: data.name,
                icon: data.weather[0].icon,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                temprature: data.main.temp
            })
        }

        data();
    }
    
    

    return (
        <div className='weather'>
            <div className="search-box">
                <Search onSearch={fetchWeatherData} />
            </div>
            <div className="weather-info">
                <Info icon={weatherInfo.icon} description={weatherInfo.description} name={weatherInfo.name} humidity={weatherInfo.humidity} pressure={weatherInfo.pressure} temp={weatherInfo.temprature} />
            </div>
        </div>
    )
}

export default Weather