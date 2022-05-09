import React, { useRef } from 'react';

import './Search.css'

const Search = (props) => {
    const searchWord = useRef()

    const search = (e) => {
        e.preventDefault();
        console.log(searchWord.current.value);
        props.onSearch(searchWord.current.value);
    }

    return (
        <div className="search">
            <form onSubmit={search}>
                <input ref={searchWord} type="text" className='search-input' placeholder='Search country......'/>
            </form>
            <div className="search-icon">
                <span className="material-icons-sharp">search</span>
            </div>
        </div>
    )
}

export default Search