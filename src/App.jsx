import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/Search'
import './App.scss'
import FetchData from './components/FetchData/FetchData'
import SideBar from './components/SideBar'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <SearchBar />
            <SideBar />
            <FetchData />
        </div>
    )
}

export default App