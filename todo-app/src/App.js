import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import { ACTION_TYPE, PAGE_TYPES } from './constants';
import { getTasks } from './apiCalls';

const App = () => {
  const [pageType, setPageType] = useState(
    PAGE_TYPES.TASKS
  );

  const [allTasks, setAllTasks] = useState([]);

  const updateTaskList = (changedTask, action) => {
    let updatedList = Object.assign([], allTasks);
    switch (action) {
      case ACTION_TYPE.NEW:
        changedTask.id = getNewTaskId();
        updatedList.push(changedTask);
        break;
      case ACTION_TYPE.UPDATE:
        updatedList = updatedList.filter(
          (task) => task.id !== changedTask.id
        );
        updatedList.push(changedTask);
        break;
    }
    setAllTasks(updatedList);
  };

  const getNewTaskId = () => {
    return (
      Math.max(...allTasks.map((task) => Number(task.id))) +
      1
    );
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await getTasks();
      setAllTasks(result);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <Navigation
        setPageType={setPageType}
        updateTaskList={updateTaskList}
      />
      <MainContent
        pageType={pageType}
        allTasks={allTasks}
        updateTaskList={updateTaskList}
      />
    </div>
  );
};

export default App;
