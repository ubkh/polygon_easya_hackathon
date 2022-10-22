import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';

function ColorSchemesExample() {
  return (
    <>

   
 

      <Navbar bg="primary" variant="light" style={{backgroundColor:"red"}}>
        <Container>
          <Navbar.Brand href="#home">Navb</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
     
    </>
  );
}

export default ColorSchemesExample;