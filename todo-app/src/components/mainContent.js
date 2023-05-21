import React, { useEffect } from 'react';
import { getTasks } from '../apiCalls';

const MainContent = ({ pageType }) => {
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      console.log(tasks);
    };
    fetchTasks();
  });

  return (
    <>
      <div>Main Content</div>
      <div>{pageType}</div>
    </>
  );
};

MainContent.PropTypes = {
  pageType: MainContent.toString.isRequired
};

export default MainContent;
