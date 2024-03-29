import { Link } from 'react-router-dom';
import React from 'react'
import './EventCard.css'
const EventCard = ({ id, heading, date, location, img }) => {
    const { year, month } = date;
    return (
        <>
            <Link to={`/events/${id}`} >
            <div className='card'>
                <div className="card-content">
                    <h3>{heading}</h3>
                    <p>
                        <span>Year: {year}</span>
                        <span>Month: {month}</span>
                    </p>
                    <div>
                    <p>{location}</p>
                    </div>
                </div>
            <div className='card-img-wrapper'>
                <img src={img} alt='Event img'></img>
            </div>
            </div>
            </Link>
            
        </>
    )
}

export default EventCard