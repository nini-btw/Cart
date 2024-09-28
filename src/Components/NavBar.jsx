import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavBar(){
  const cart =useSelector(state=>state.cart);
  
    return(
        <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/products" className='nav-link'>Products</Link>
            
            {
              ((cart.length)>0 ? <Link to="/cart" className='nav-link'>Cart {cart.length}</Link> : <Link to="/cart" className='nav-link'>Cart</Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default NavBar;