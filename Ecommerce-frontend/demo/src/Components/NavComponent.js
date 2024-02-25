// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavComponent = () => {
    return (
        <Navbar variant="dark"  fixed='top' style={{backgroundColor:'#D3D3D3'}}>

        <Container>
          <Navbar.Brand href="/" style={{fontSize:'28px'}}><b>ECOMMERCE</b></Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
          </Navbar.Collapse> */}
        
                    <div style={{marginLeft:'1000px'}}>
                    <Link to="/login" >
                    <Button style={{marginRight: '10px'}}> <Navbar.Text> Login </Navbar.Text>  </Button>
                    </Link>
                    <Link to="/register">
                    <Button style={{marginRight: '10px'}}> <Navbar.Text> Register </Navbar.Text>  </Button>
                    </Link>
                
                    <Link to="/contact">
                    <Button> <Navbar.Text> Support </Navbar.Text>  </Button></Link>
                </div>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavComponent;
