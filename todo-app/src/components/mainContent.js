import React, { useEffect } from 'react';
import { getTasks } from '../apiCalls';
import mainContentStyles from './MainContent.module.css';
import TaskCard from './TaskCard';

const MainContent = ({ pageType }) => {
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      console.log(tasks);
      console.log(pageType);
    };
    fetchTasks();
  });

  return (
    <div className={mainContentStyles.container}>
      <TaskCard />
      <TaskCard />
    </div>
  );
};

MainContent.PropTypes = {
  pageType: MainContent.toString.isRequired
};

export default MainContent;
