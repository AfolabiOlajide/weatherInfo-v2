import React, { useState } from 'react';

import './Search.css'

const Search = (props) => {
    const [ searchText, setSearchText] = useState("");

    const logSesrchTextHandler = (e) => {
        setSearchText(e.target.value);
    }


    const search = (e) => {
        e.preventDefault();
        console.log(searchText);
        props.onSearch(searchText);
        setSearchText("")
    }

    return (
        <div className="search">
            <form onSubmit={search}>
                <input value={searchText} onChange={logSesrchTextHandler} type="text" className='search-input' placeholder='Search location......'/>
            </form>
            <div onClick={search} className="search-icon">
                <span className="material-icons-sharp">search</span>
            </div>
        </div>
    )
}

export default Search