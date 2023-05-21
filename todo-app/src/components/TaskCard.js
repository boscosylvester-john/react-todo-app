import React from 'react';
import Card from 'react-bootstrap/Card';
import taskCardStyles from './TaskCard.module.css';
// import completedTaskImg from '../icons/completedtasks.png';
import pendingTaskImg from '../icons/pendingtasks.png';

const TaskCard = () => {
  return (
    <Card className={taskCardStyles.task}>
      <Card.Body>
        <img
          className={taskCardStyles.checkImage}
          src={pendingTaskImg}
        />
        <div className={taskCardStyles.line}></div>
        This is a sample card
      </Card.Body>
    </Card>
  );
};

TaskCard.PropTypes = {};
export default TaskCard;
