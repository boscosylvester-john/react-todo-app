import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import {
  ACTION_TYPE,
  DUMMY_CURRENT_TASK,
  PAGE_TYPES
} from '../constants';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TaskModal from './TaskModal';

const Navigation = ({ setPageType, updateTaskList }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <TaskModal
        currentTask={DUMMY_CURRENT_TASK}
        submitType={ACTION_TYPE.NEW}
        showModal={showModal}
        setShowModal={setShowModal}
        updateTaskList={updateTaskList}
      />
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
              setShowModal(true);
            }}>
            Add Task
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

Navigation.PropTypes = {
  setPageType: PropTypes.func.isRequired
};

export default Navigation;
