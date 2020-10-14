import React from 'react'
import './style.scss'

function Search() {
    return (
        <div className='searchbar' >
            <div className="search-input">
                <i className="fas fa-shopping-bag"></i>
                <input type="text" placeholder='Title,companies,expertise or benefits' />
                <input className='btn' type="submit" placeholder='Search' />
            </div>

        </div>
    )
}

export default Search
