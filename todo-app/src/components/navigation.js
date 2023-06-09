import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import {
  DUMMY_CURRENT_TASK,
  MODAL_ACTION_TYPE,
  PAGE_TYPES
} from '../constants';
import Button from 'react-bootstrap/Button';

const Navigation = ({ setPageType, displayModal }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            setPageType(PAGE_TYPES.TASKS);
          }}>
          ToDo App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              setPageType(PAGE_TYPES.TASKS);
            }}>
            Tasks
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setPageType(PAGE_TYPES.MY_DAY);
            }}>
            My Day
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setPageType(PAGE_TYPES.MISSED_TASKS);
            }}>
            Missed Tasks
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setPageType(PAGE_TYPES.FAVORITES);
            }}>
            Favorites
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setPageType(PAGE_TYPES.COMPLETED);
            }}>
            Completed
          </Nav.Link>
        </Nav>
        <Button
          variant="primary"
          onClick={() => {
            displayModal(
              MODAL_ACTION_TYPE.NEW,
              DUMMY_CURRENT_TASK
            );
          }}>
          Add Task
        </Button>
      </Container>
    </Navbar>
  );
};

Navigation.PropTypes = {
  setPageType: PropTypes.func.isRequired
};

export default Navigation;
