import React, { useState } from 'react';
import {  toast } from 'react-toastify';

import Search from './Search';
import Info from './Info';
import './Weather.css'

const Weather = () => {
    // const [errorMessage, setErrorMessage] = useState('')
    // const [searchIsValid, setSearchIsValid] = useState(false);
    // const [searchInputBlur, setSearchInputBlur] = useState(false);
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
        if(country.trim() !==""){
            // setSearchIsValid(true)

            const data = async () => {
                try{
                    const response = await toast.promise(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=imperial`), {
                        pending: 'Getting weather information'
                    });
                    const data = await response.json()

                    if (!response.ok) {
                        toast.error('Error getting information. Try again', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        throw new Error('Request failed!');
                        
                    }else{
                        setWeatherInfo({
                            name: data.name,
                            icon: data.weather[0].icon,
                            description: data.weather[0].description,
                            humidity: data.main.humidity,
                            pressure: data.main.pressure,
                            temprature: data.main.temp
                        })
                        console.log(country);
                        console.log(data);
                        toast.success('Request Successful', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    
    
                    
                }catch (err){
    
                }
            }

            
            data();
        }else{
            // setSearchIsValid(false)
            // setSearchInputBlur(true)
            console.log('cannot process your request');
        }
        // console.log(country);
    }

    // useEffect(() => {
    //     const errorPop = setTimeout(() => {
    //         setErrorMessage("Search Result not found...Please search for another keyword")
    //     }, 2000)
    //     return clearTimeout(errorPop)
    // }, [setErrorMessage])
    
    // const errorBox = <div className='danger'>{errorMessage}</div>
    // const error = !searchIsValid && searchInputBlur;

    return (
        <div className='weather'>
            <div className="search-box">
                <Search onSearch={fetchWeatherData} />
            </div>
            {/* { error && <div className='danger'>Error Message</div> } */}
            <div className="weather-info">
                <Info icon={weatherInfo.icon} description={weatherInfo.description} name={weatherInfo.name} humidity={weatherInfo.humidity} pressure={weatherInfo.pressure} temp={weatherInfo.temprature} />
            </div>
        </div>
    )
}

export default Weather