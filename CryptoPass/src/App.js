import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Error404 from './components/Error404'
import Events from './components/Events'
import VerEntradas from './components/VerEntradas'
import CrearEvento from './components/CrearEvento'
import Sign from './components/Sign' 
import readQr from './components/readQr'
import ComprarEntradas from './components/ComprarEntradas'







export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Events} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/compras' component={VerEntradas} />
                    <Route exact path='/CrearEvento' component={CrearEvento} />
                    <Route exact path='/Sign' component={Sign} />
                    <Route exact path='/readQr' component={readQr} />
                    <Route exact path='/ComprarEntradas' component={ComprarEntradas} />
                    <Route component={Error404} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}