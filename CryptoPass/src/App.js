import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Error404 from './components/Error404'
import Restricted from './components/Restricted'
import VerEntradas from './components/VerEntradas'
import CrearEvento from './components/CrearEvento'



export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Restricted} />
                    <Route exact path='/compras' component={VerEntradas} />
                    <Route exact path='/CrearEvento' component={CrearEvento} />

                    <Route component={Error404} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}