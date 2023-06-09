import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {
  DUMMY_CURRENT_TASK,
  IS_FAVORITE,
  MODAL_ACTION_TYPE
} from '../constants';
import Form from 'react-bootstrap/Form';
import taskModalStyles from './TaskModal.module.css';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineDelete
} from 'react-icons/ai';

const TaskModal = ({
  currentTask,
  submitType,
  showModal,
  hideModal,
  updateTaskList
}) => {
  const [subject, setSubject] = useState(
    currentTask.subject
  );

  const [description, setDescription] = useState(
    currentTask.description
  );

  const [dueDate, setDueDate] = useState(
    currentTask.dueDate
  );

  const [reminderDate, setReminderDate] = useState(
    currentTask.reminderDate
  );

  const [isFavorite, setIsFavorite] = useState(
    currentTask.isFavorite
  );

  const [isValidInput, setIsValidInput] = useState(false);

  useEffect(() => {
    setSubject(currentTask.subject);
    setDescription(currentTask.description);
    setDueDate(currentTask.dueDate);
    setReminderDate(currentTask.reminderDate);
    setIsFavorite(currentTask.isFavorite);
  }, [currentTask]);

  const closeModal = () => {
    resetValues();
    hideModal();
  };

  const validate = () => {
    if (
      subject === '' ||
      description === '' ||
      dueDate === ''
    ) {
      setIsValidInput(false);
      return false;
    }
    setIsValidInput(true);
    return true;
  };

  const submitChanges = (action) => {
    if (!validate()) {
      return;
    }
    let task = Object.assign({}, currentTask);
    if (action === MODAL_ACTION_TYPE.NEW) {
      task = DUMMY_CURRENT_TASK;
      const today = new Date();
      task.createdOn =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    }
    task.subject = subject;
    task.description = description;
    task.dueDate = dueDate;
    task.reminderDate = reminderDate;
    task.isFavorite = isFavorite;
    hideModal();
    updateTaskList(task, action);
  };

  const resetValues = () => {
    setSubject(currentTask.subject);
    setDescription(currentTask.description);
    setDueDate(currentTask.dueDate);
    setReminderDate(currentTask.reminderDate);
    setIsFavorite(currentTask.isFavorite);
  };

  const toggleFavoriteStatus = () => {
    if (isFavorite === IS_FAVORITE.TRUE) {
      setIsFavorite(IS_FAVORITE.FALSE);
    } else {
      setIsFavorite(IS_FAVORITE.TRUE);
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {submitType === MODAL_ACTION_TYPE.NEW
            ? 'Create your new task...'
            : 'Update your task'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {isFavorite === IS_FAVORITE.TRUE ? (
            <AiFillStar
              className={taskModalStyles.favorites}
              onClick={() => {
                toggleFavoriteStatus();
              }}
            />
          ) : (
            <AiOutlineStar
              className={taskModalStyles.unfavorite}
              onClick={() => {
                toggleFavoriteStatus();
              }}
            />
          )}
          <Form.Group>
            <Form.Label>
              Task Subject{' '}
              <span
                className={taskModalStyles.requiredField}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="input"
              className={taskModalStyles.formControls}
              placeholder="Enter task title/subject"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Task Description{' '}
              <span
                className={taskModalStyles.requiredField}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="input"
              className={taskModalStyles.formControls}
              placeholder="Enter task desecription"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Due Date{' '}
              <span
                className={taskModalStyles.requiredField}>
                *
              </span>
            </Form.Label>
            <Form.Control
              type="date"
              className={taskModalStyles.formControls}
              placeholder="Enter due date"
              value={dueDate}
              onChange={(event) => {
                setDueDate(event.target.value);
              }}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Reminder Date</Form.Label>
            <Form.Control
              type="date"
              className={taskModalStyles.formControls}
              placeholder="Enter reminder date"
              value={reminderDate}
              onChange={(event) => {
                setReminderDate(event.target.value);
              }}
            />
          </Form.Group>
          {isValidInput ? null : (
            <Form.Group>
              <Form.Label
                className={taskModalStyles.requiredField}>
                *Fill required fields
              </Form.Label>
            </Form.Group>
          )}
          <AiOutlineDelete
            className={taskModalStyles.delete}
            onClick={() => {
              hideModal();
              updateTaskList(
                currentTask,
                MODAL_ACTION_TYPE.DELETE
              );
            }}
          />
          <div className={taskModalStyles.buttonGroup}>
            <Button
              variant="secondary"
              className={taskModalStyles.resetButton}
              onClick={resetValues}>
              Reset Changes
            </Button>
            <Button
              variant="primary"
              type="submit"
              className={taskModalStyles.submitButton}
              onClick={(event) => {
                event.preventDefault();
                submitChanges(submitType);
              }}>
              {submitType === MODAL_ACTION_TYPE.NEW
                ? 'Create Task'
                : 'Update Task'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

TaskModal.PropTypes = {};
export default TaskModal;
