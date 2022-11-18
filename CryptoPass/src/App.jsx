import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import NavBar from  './components/NavBar';
import './App.css'
import { Toaster } from 'react-hot-toast';

import EventScreen from './screens/EventScreen';
import HomeScreen from './screens/HomeScreen';
import SignScreen from './screens/SignScreen';
import MarkTicketScreen from './screens/MarkTicketScreen';

import * as React from 'react';


export default function App() {

    return (
<>   
    <NavBar/>

    <Router>
            <Toaster />
            {/* Navbar */}
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/events/:eventId" element={<EventScreen/>}/>
                <Route path="/sign" element={<SignScreen/>}/>
                <Route path="/markTicket/:CPT" element={<MarkTicketScreen/>}/>
            </Routes>
            {/* Footer */}
    </Router>


</>
      
    )
}