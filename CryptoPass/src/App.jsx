import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import NavBar from  './components/NavBar';
import './App.css'
import { Toaster } from 'react-hot-toast';

import EventScreen from './screens/EventScreen';
import HomeScreen from './screens/HomeScreen';
import SignScreen from './screens/SignScreen';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Container from '@mui/material/Container';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

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
            </Routes>
            {/* Footer */}
    </Router>


</>
      
    )
}