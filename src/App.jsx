import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/Search'
import './App.scss'
import SideBar from './components/SideBar'
import Jobs from './components/Jobs/Index'
import { Store } from './Contexts/JobsContext';

const App = () => {


    const { state, dispatch } = React.useContext(Store);


    useEffect(() => {
        const fetchDataAction = async () => {
            const data = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
            const dataJSON = await data.json();
            return dispatch({
                type: 'FETCH_DATA',
                payload: dataJSON
            });

        };
        fetchDataAction();
    }, [])


    return (
        <div className="App">
            <Navbar />

            <SearchBar />
            <div className='body'>
                <SideBar />
                <Jobs />
            </div>
        </div >

    )
}

export default App