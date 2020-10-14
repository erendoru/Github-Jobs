import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/Search'
import './App.scss'
import FetchData from './components/FetchData/FetchData'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <SearchBar />
            <FetchData />
        </div>
    )
}

export default App