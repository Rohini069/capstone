import React from 'react'
import './EventList.css'
import EventCard from '../../Components/EventCard/EventCard'
import { eventList } from '../../utils/EventDatabase'
import CreateEvent from '../CreateEvent/CreateEvent'

const EventList = () => {
    const renderEventCards = ()=>{
       return eventList.map(({id,heading,date,location,img})=>{
            return(
                <>
                
                <div className="eventcontents">
                <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
                />
                </div>
                
            </>
            )
        })
    }
  return (
    <>
    <div className="event-list-wrapper">
        
        <div className="event-list">
        <h1>Event List</h1>
        {eventList.length>0?(
            renderEventCards()):<p>No events Available</p>}
        </div>
    </div>
        
    </>
  )
}

export default EventList