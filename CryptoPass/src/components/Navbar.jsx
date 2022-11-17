import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from '../screens/HomeScreen';
import Event from '../screens/EventScreen';




export default function NavBar() {
 
  return (
    <Navbar>
      <Navbar.Brand href="/">Cryptopass</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="../screens/EventScreen">Mis eventos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}
