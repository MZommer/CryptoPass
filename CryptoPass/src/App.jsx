import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import { Toaster } from 'react-hot-toast';

import EventScreen from './screens/EventScreen';
import HomeScreen from './screens/HomeScreen';
import SignScreen from './screens/SignScreen';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {

    return (
        <Router>
            <Toaster />
            {/* Navbar */}
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/events/:eventId" element={<EventScreen/>}/>
                <Route path="/sign" element={<SignScreen/>}/>
            </Routes>
            {/* Footer */}
        </Router>
    )
}