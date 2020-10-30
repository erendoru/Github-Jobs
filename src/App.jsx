import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/Search'
import './App.scss'
import SideBar from './components/SideBar'
import Jobs from './components/Jobs/Index'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <SearchBar />
            <div className='body'>
                <SideBar />
                <Jobs />
            </div>
        </div>
    )
}

export default App