import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Tasks</Nav.Link>
          <Nav.Link href="#features">My Day</Nav.Link>
          <Nav.Link href="#features">Missed Tasks</Nav.Link>
          <Nav.Link href="#pricing">Favorites</Nav.Link>
          <Nav.Link href="#features">Completed</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
