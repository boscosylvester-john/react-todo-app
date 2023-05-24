import React from 'react';
import Card from 'react-bootstrap/Card';
import taskCardStyles from './TaskCard.module.css';
import completedTaskImg from '../icons/completedtasks.png';
import pendingTaskImg from '../icons/pendingtasks.png';
import filledStarImg from '../icons/filledstar.png';
import unfilledStarImg from '../icons/unfilledstar.png';
import TaskContents from './TaskContents';
import { IS_FAVORITE, PAGE_TYPES } from '../constants';

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
        <div className={taskCardStyles.line1}></div>
        <TaskContents className={taskCardStyles.contents} />
        <div className={taskCardStyles.line2}></div>
        <img
          src={
            task.isFavorite === IS_FAVORITE.TRUE
              ? filledStarImg
              : unfilledStarImg
          }
          className={taskCardStyles.favorites}
        />
      </Card.Body>
    </Card>
  );
};

TaskCard.PropTypes = {};
export default TaskCard;
