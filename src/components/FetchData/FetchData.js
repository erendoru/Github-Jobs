import React from 'react'


function FetchData() {

    const getJobs = async () => {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
        const data = response.json();
        return data;
    }

    getJobs().then(data => {
        console.log(data)
    })

    return (
        <div>
            <h1>sa</h1>
        </div>
    )
}

export default FetchData
