import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Active</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              className={(navData) => navData.isActive ? 'Active' : ''}
              to='/cliente/lista' 
              as={NavLink}
            >
              Clientes
            </Nav.Link>
            <Nav.Link 
              className={(navData) => navData.isActive ? 'Active' : ''}
              to='/atividade/lista' 
              as={NavLink}
            >
              Atividades
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown align="end" title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configurações
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}