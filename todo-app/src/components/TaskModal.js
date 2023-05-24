import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TaskModal = ({
  currentTask,
  submitType,
  showModal,
  setShowModal,
  updateTaskList
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  const submitChanges = (task, action) => {
    updateTaskList(task, action);
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Woohoo, youre reading this text in a modal!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            submitChanges(currentTask, submitType);
          }}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

TaskModal.PropTypes = {};
export default TaskModal;
