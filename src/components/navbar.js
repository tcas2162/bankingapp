import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <Navbar bg="dark" variant="primary">
      <Container>
        <Navbar.Brand as={Link} to="/">
        Bank Of Timerica
        </Navbar.Brand>
        <Nav className="links">
          <Nav.Link as={Link} to="/createaccount">Create Account</Nav.Link>
          <Nav.Link as={Link} to="/deposit">Deposit</Nav.Link>
          <Nav.Link as={Link} to="/withdraw">Withdraw</Nav.Link>
          <Nav.Link as={Link} to="/alldata">All Data</Nav.Link>
        </Nav>
      </Container>
  </Navbar>
)

export default NavBar