import React from 'react';
import taskContentsStyles from './TaskContents.module.css';

const TaskContents = () => {
  return (
    <div className={taskContentsStyles.contents}>
      Task Content is here
    </div>
  );
};

TaskContents.PropTypes = {};
export default TaskContents;
