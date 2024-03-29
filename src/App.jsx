import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventDetails from './pages/EventDetails/EventDetails'
import EventList from './pages/EventList/EventList'
import FilterEvents from './pages/FilterEvents/FilterEvents'
import Navigation from './Components/Navigation/Navigation'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import EventForm from './pages/EventForm/EventForm'
import Homepage from './pages/Homepage/Homepage'
import CreateEvent from './pages/CreateEvent/CreateEvent'
import Showevent from './pages/Showevent/Showevent'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      {/* <Route path='/event_form' element={<EventForm/>} /> */}
      <Route path='/' element={<Homepage/>} />
      <Route path='/events' element={<EventList/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/find-events' element={<FilterEvents/>}/>
      <Route path='/events/:id' element={<EventDetails/>}/>
      {/* <Route path='/create-events' element={<EventForm/>} /> */}
      <Route path='/createevent' element={ <CreateEvent/> } />
      <Route path='/showevent' element={<Showevent/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App