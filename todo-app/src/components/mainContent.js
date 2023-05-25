import React, { useEffect, useState } from 'react';
import mainContentStyles from './MainContent.module.css';
import TaskCard from './TaskCard';
import { IS_FAVORITE, PAGE_TYPES } from '../constants';
import { isOverdue } from './utils';

const MainContent = ({
  pageType,
  allTasks,
  updateTaskList
}) => {
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    let filteredTasks = allTasks;
    switch (pageType) {
      case PAGE_TYPES.COMPLETED:
        filteredTasks = filteredTasks.filter(
          (task) => task.status === pageType
        );
        break;
      case PAGE_TYPES.MISSED_TASKS:
        filteredTasks = filteredTasks.filter(
          (task) =>
            task.status === PAGE_TYPES.PENDING &&
            isOverdue(task.dueDate)
        );
        break;
      case PAGE_TYPES.MY_DAY:
        filteredTasks = filteredTasks.filter(
          (task) =>
            new Date(task.dueDate).toDateString() ===
            new Date().toDateString()
        );
        break;
      case PAGE_TYPES.FAVORITES:
        filteredTasks = filteredTasks.filter(
          (task) => task.isFavorite === IS_FAVORITE.TRUE
        );
        break;
      default:
        break;
    }
    setCurrentTasks(filteredTasks);
  }, [pageType, allTasks]);

  return (
    <div className={mainContentStyles.container}>
      {currentTasks && currentTasks.length === 0
        ? 'No tasks yet, start by creating new tasks'
        : currentTasks.map((task, index) => {
            return (
              <TaskCard
                task={task}
                updateTaskList={updateTaskList}
                key={index}
              />
            );
          })}
    </div>
  );
};

MainContent.PropTypes = {
  pageType: MainContent.toString.isRequired
};

export default MainContent;
