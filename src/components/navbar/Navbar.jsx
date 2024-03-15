import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='primary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
        <img
            alt=""
            src="./images/logo.png"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Philips HUE Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/discount">Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/new">Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/popular">Más vendidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
                <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom