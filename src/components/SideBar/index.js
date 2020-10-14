import React from 'react'
import './style.scss'



function index() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='filter'>
            <form action='#' onSubmit={handleSubmit}>
                <div className="form fulltime">
                    <input type="checkbox" name='fulltime' />
                    <span>Full Time</span>
                </div>

                <div className="form-text">
                    <h4>LOCATION</h4>
                    <div className="city-input">
                        <i class="fas fa-globe-europe"></i>
                        <input type="text" name='city' placeholder='City,state,zip code or country' />
                    </div>
                </div>

                <div className="form London">
                    <input type="checkbox" name='london' />
                    <span>London</span>
                </div>
                <div className="form Amsterdam">
                    <input type="checkbox" name='Amsterdam' />
                    <span>Amsterdam</span>
                </div>
                <div className="form NewYork">
                    <input type="checkbox" name='NewYork' checked />
                    <span>New York</span>
                </div>
                <div className="form Berlin">
                    <input type="checkbox" name='Berlin' />
                    <span>Berlin</span>
                </div>
            </form>
        </div>
    )
}

export default index
