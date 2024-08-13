import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, NavLink, Route,Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ width: '100%' }}>
      <Container>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhl_kIq02Y_waStboOSvlEB7a-DOs4PrVGg&s' className='lgo' />
        {/* <Nav className="me-auto" id="navbar"> */}
        
          <NavLink style={{textDecoration:'none' ,fontSize:'20px'}} to="/" >Home</NavLink>
          <NavLink style={{textDecoration:'none',fontSize:'20px'}} to="/services" >Services</NavLink>
          <NavLink  style={{textDecoration:'none',fontSize:'20px'}}to="/pricing" >Pricing</NavLink>
          <NavLink style={{textDecoration:'none',fontSize:'20px'}} to="/contact" >Contact</NavLink>
         
      </Container>
    </Navbar>
  );
}

export default NavBar;