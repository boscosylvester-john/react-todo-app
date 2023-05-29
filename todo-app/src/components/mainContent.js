import React, { useEffect, useState } from 'react';
import mainContentStyles from './MainContent.module.css';
import TaskCard from './TaskCard';
import Sorter from './Sorter';
import { IS_FAVORITE, PAGE_TYPES } from '../constants';
import { isOverdue } from './utils';
import Searcher from './Searcher';

const MainContent = ({
  pageType,
  filteredTasks,
  updateTaskList,
  sortTasks,
  displayModal
}) => {
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    let finalTasks = filteredTasks;
    switch (pageType) {
      case PAGE_TYPES.COMPLETED:
        finalTasks = finalTasks.filter(
          (task) => task.status === pageType
        );
        break;
      case PAGE_TYPES.MISSED_TASKS:
        finalTasks = finalTasks.filter(
          (task) =>
            task.status === PAGE_TYPES.PENDING &&
            isOverdue(task.dueDate)
        );
        break;
      case PAGE_TYPES.MY_DAY:
        finalTasks = finalTasks.filter(
          (task) =>
            new Date(task.dueDate).toDateString() ===
            new Date().toDateString()
        );
        break;
      case PAGE_TYPES.FAVORITES:
        finalTasks = finalTasks.filter(
          (task) => task.isFavorite === IS_FAVORITE.TRUE
        );
        break;
      default:
        break;
    }
    setCurrentTasks(finalTasks);
  }, [pageType, filteredTasks]);

  return (
    <div className={mainContentStyles.container}>
      {currentTasks && currentTasks.length === 0 ? (
        'No tasks yet, start by creating new tasks'
      ) : (
        <>
          <Searcher />
          <Sorter sortTasks={sortTasks} />
          {currentTasks.map((task, index) => {
            return (
              <TaskCard
                task={task}
                updateTaskList={updateTaskList}
                displayModal={displayModal}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

MainContent.PropTypes = {
  pageType: MainContent.toString.isRequired
};

export default MainContent;
