import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios';
import * as dayjs from 'dayjs';
import "dayjs/locale/tr";
import RelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(RelativeTime)
dayjs.locale('tr');

function jobs() {

    const [jobs, setJobs] = useState([]);

    var a = dayjs()

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
            .then((res) => {
                setJobs(res.data);
            })

    }, [])


    return (
        <div className='jobs'>
            {jobs.slice(0, 3).map((data, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="img-side">
                            <img src={data.company_logo} alt="LOGO" />
                        </div>
                        <div className="info-side">
                            <h4 className='company-name'>{data.company}</h4>
                            <p className='company-job'>{data.title}</p>
                            <div className="job-time">{data.type}</div>
                        </div>
                        <div className="info-end">
                            <div className="zone">
                                <i className="fas fa-globe-europe"></i>
                                <p>{data.location.trim}</p>
                            </div>
                            <div className="date">
                                <i className="far fa-clock"></i>
                                <p>{a.to(data.created_at)} </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default jobs
