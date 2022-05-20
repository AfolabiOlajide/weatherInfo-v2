import React, { useState } from 'react';
// import cities from 'cities.json'

import './Search.css'

const Search = (props) => {
    const [ searchText, setSearchText] = useState("");
    // const [isTouched, setIsTouched] = useState(false)

    // const searchTextIsValid = searchText.trim() !== "";
    // const inputIsValid = searchTextIsValid && isTouched

    // let mainCities = [];
    // mainCities = cities.map(city => city.name.toLocaleLowerCase())

    // let searchedCities = []
    // let uniqueCities = []

    const logSearchTextHandler = (e) => {
        setSearchText(e.target.value);

        // searchedCities = mainCities.filter(cities => {
        //     return cities.startsWith(e.target.value);
        // })

        // uniqueCities = [...new Set(searchedCities)];

        // // console.log(searchedCities);
        // console.log(uniqueCities);
    }


    const search = (e) => {
        e.preventDefault();
        console.log(searchText);
        props.onSearch(searchText);
        setSearchText("")
        
    }

    return (
        <div className='search-main'>
            <div className="search">
                <form onSubmit={search}>
                    <input value={searchText} onChange={logSearchTextHandler} type="text" className='search-input' placeholder='Search location......'/>
                </form>
                <div onClick={search} className="search-icon">
                    <span className="material-icons-sharp">search</span>
                </div>
                {/* <div className="suggestion">
                    <span>new york</span>
                    <span>new york</span>
                    <span>new york</span>
                </div> */}
            </div>
        </div>
    )
}

export default Search