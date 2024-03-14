import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';

function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='primary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
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
            <Nav.Link href="#home">Lamparas</Nav.Link>
            <Nav.Link href="#link">Apliques</Nav.Link>
            <Nav.Link href="#link">Sensores</Nav.Link>
            <NavDropdown title="Controladoras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
                {/* <BsCartFill/> */}
                <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom