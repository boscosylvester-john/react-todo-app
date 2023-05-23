import React from 'react';
import Card from 'react-bootstrap/Card';
import taskCardStyles from './TaskCard.module.css';
import completedTaskImg from '../icons/completedtasks.png';
import pendingTaskImg from '../icons/pendingtasks.png';
import TaskContents from './TaskContents';
import { PAGE_TYPES } from '../constants';

const TaskCard = ({ task, updateTaskList }) => {
  const toggleCompletionStatus = (currentTask) => {
    if (currentTask.status === PAGE_TYPES.COMPLETED) {
      currentTask.status = PAGE_TYPES.PENDING;
    } else {
      currentTask.status = PAGE_TYPES.COMPLETED;
    }
    updateTaskList(currentTask);
  };

  return (
    <Card className={taskCardStyles.task}>
      <Card.Body>
        <img
          className={taskCardStyles.checkImage}
          src={
            task.status === PAGE_TYPES.COMPLETED
              ? completedTaskImg
              : pendingTaskImg
          }
          onClick={() => {
            toggleCompletionStatus(task);
          }}
        />
        <div className={taskCardStyles.line}></div>
        <TaskContents />
      </Card.Body>
    </Card>
  );
};

TaskCard.PropTypes = {};
export default TaskCard;
