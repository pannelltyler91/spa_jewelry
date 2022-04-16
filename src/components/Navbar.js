import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function Bar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#778da9',color:'#e0e1dd'}}>
        <Container >
        <Navbar.Brand href="#home" style={{color:'#e0e1dd'}}>Jewelry</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:'#e0e1dd'}}>Gallery</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'#e0e1dd'}}>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:'#e0e1dd'}}>About Us</Nav.Link>
            <Nav.Link eventKey={2} href="/contact" style={{color:'#e0e1dd'}}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Bar;