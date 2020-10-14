import React, { useState, useEffect } from 'react'

function FetchData() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {


        const getJobs = async () => {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json');
            const data = response.json();
            return data;
        }

        getJobs().then(data => {
            console.log(data)
            setJobs(data);
        })

    }, [])
    return (
        <div>

        </div>
    )
}

export default FetchData
