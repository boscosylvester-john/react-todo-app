import React from 'react';
import Card from 'react-bootstrap/Card';
import taskCardStyles from './TaskCard.module.css';
import TaskContents from './TaskContents';
import { IS_FAVORITE, PAGE_TYPES } from '../constants';
import {
  AiFillStar,
  AiOutlineStar,
  AiFillCheckCircle,
  AiOutlineCheckCircle
} from 'react-icons/ai';

const TaskCard = ({
  task,
  updateTaskList,
  displayModal
}) => {
  const toggleCompletionStatus = (currentTask) => {
    if (currentTask.status === PAGE_TYPES.COMPLETED) {
      currentTask.status = PAGE_TYPES.PENDING;
    } else {
      currentTask.status = PAGE_TYPES.COMPLETED;
    }
    updateTaskList(currentTask);
  };

  const toggleFavoriteStatus = (currentTask) => {
    if (currentTask.isFavorite === IS_FAVORITE.TRUE) {
      currentTask.isFavorite = IS_FAVORITE.FALSE;
    } else {
      currentTask.isFavorite = IS_FAVORITE.TRUE;
    }
    updateTaskList(currentTask);
  };

  return (
    <Card className={taskCardStyles.task}>
      <Card.Body>
        {task.status === PAGE_TYPES.COMPLETED ? (
          <AiFillCheckCircle
            className={taskCardStyles.completed}
            onClick={() => {
              toggleCompletionStatus(task);
            }}
          />
        ) : (
          <AiOutlineCheckCircle
            className={taskCardStyles.notCompleted}
            onClick={() => {
              toggleCompletionStatus(task);
            }}
          />
        )}
        <div className={taskCardStyles.line1}></div>
        <TaskContents
          className={taskCardStyles.contents}
          task={task}
          displayModal={displayModal}
        />
        <div className={taskCardStyles.line2}></div>
        {task.isFavorite === IS_FAVORITE.TRUE ? (
          <AiFillStar
            className={taskCardStyles.favorites}
            onClick={() => {
              toggleFavoriteStatus(task);
            }}
          />
        ) : (
          <AiOutlineStar
            className={taskCardStyles.unfavorite}
            onClick={() => {
              toggleFavoriteStatus(task);
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

TaskCard.PropTypes = {};
export default TaskCard;
