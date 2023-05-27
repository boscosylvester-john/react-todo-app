import React from 'react';
import taskContentsStyles from './TaskContents.module.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsAlarm } from 'react-icons/bs';
import { isOverdue } from './utils';
import { MODAL_ACTION_TYPE } from '../constants';

const TaskContents = ({ task, displayModal }) => {
  return (
    <div
      className={taskContentsStyles.contents}
      onClick={() => {
        displayModal(MODAL_ACTION_TYPE.UPDATE, task);
      }}>
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
        {task.reminderDate !== '' ? (
          <>
            <BsAlarm
              className={taskContentsStyles.reminder}
            />
            {new Date(task.reminderDate).toDateString()}
          </>
        ) : null}
      </div>
    </div>
  );
};

TaskContents.PropTypes = {};
export default TaskContents;
