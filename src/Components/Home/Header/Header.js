import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    const {user , logout} = useAuth()
    return (
        
         <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
      {/* <Container> */}
        <NavLink to="/home"><img width='80px' src={logo} alt="" /></NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h6 >Home</h6></Nav.Link>
          <Nav.Link className='link-style ' as={Link} to="/service"><h6 >Service</h6></Nav.Link>
          <Nav.Link className='link-style ' as={Link} to="/doctor"><h6 >Doctor</h6></Nav.Link>
          <Nav.Link className='link-style ' as={Link} to="/about"><h6 >About</h6></Nav.Link>
         
          <a>
            {
              user ?.email ?
               <>
               {user.displayName}  <Button onClick={ logout }>Logout</Button>
                </>
               
               : <Nav.Link className='link-style' as={Link} to="/login"><Button>Login</Button></Nav.Link>
            }
            
          </a>

        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
       
    );
};

export default Header;