import React from 'react';
import taskContentsStyles from './TaskContents.module.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsAlarm } from 'react-icons/bs';
import { isOverdue } from './utils';

const TaskContents = ({ task, updateTaskList }) => {
  console.log(updateTaskList);
  console.log(task, isOverdue(task.dueDate));
  return (
    <div className={taskContentsStyles.contents}>
      {task.subject}
      <div
        className={`${taskContentsStyles.dates} ${
          isOverdue(task.dueDate)
            ? ' ' + taskContentsStyles.overdue
            : ' ' + taskContentsStyles.notDue
        }`}>
        <AiOutlineCalendar
          className={taskContentsStyles.calendar}
        />
        {new Date(task.dueDate).toDateString()}
        {task.dueDate !== '' ? (
          <>
            <BsAlarm
              className={taskContentsStyles.reminder}
            />
            {new Date(task.dueDate).toDateString()}
          </>
        ) : null}
      </div>
    </div>
  );
};

TaskContents.PropTypes = {};
export default TaskContents;
