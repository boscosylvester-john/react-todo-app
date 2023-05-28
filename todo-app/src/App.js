import { useEffect, useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import {
  DUMMY_CURRENT_TASK,
  MODAL_ACTION_TYPE,
  PAGE_TYPES,
  SORTING_OPTIONS
} from './constants';
import { getTasks } from './apiCalls';
import TaskModal from './components/TaskModal';

const App = () => {
  const [pageType, setPageType] = useState(
    PAGE_TYPES.TASKS
  );

  const [allTasks, setAllTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [modalTask, setModalTask] = useState(
    DUMMY_CURRENT_TASK
  );

  const [modalActionType, setModalActionType] = useState(
    MODAL_ACTION_TYPE.NONE
  );

  const updateTaskList = (changedTask, action) => {
    let updatedList = Object.assign([], allTasks);
    switch (action) {
      case MODAL_ACTION_TYPE.NEW:
        changedTask.id = getNewTaskId();
        updatedList.push(changedTask);
        break;
      case MODAL_ACTION_TYPE.UPDATE:
        updatedList = updatedList.filter(
          (task) => task.id !== changedTask.id
        );
        updatedList.push(changedTask);
        break;
    }
    setAllTasks(updatedList);
  };

  const sortTasks = (sortby) => {
    let sortedTasks = Object.assign([], allTasks);
    switch (sortby) {
      case SORTING_OPTIONS.DEFAULT:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return t1 - t2;
        });
        break;
      case SORTING_OPTIONS.DUE_DATE:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return (
            new Date(t1.dueDate) - new Date(t2.dueDate)
          );
        });
        break;
      case SORTING_OPTIONS.REMINDER_DATE:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return (
            new Date(t1.reminderDate) -
            new Date(t2.reminderDate)
          );
        });
        break;
      default:
        break;
    }
    setAllTasks(sortedTasks);
  };

  const getNewTaskId = () => {
    return (
      Math.max(...allTasks.map((task) => Number(task.id))) +
      1
    );
  };

  const displayModal = (actionType, task) => {
    setModalActionType(actionType);
    setModalTask(task);
    setShowModal(true);
  };

  const hideModal = () => {
    setModalActionType(MODAL_ACTION_TYPE.NONE);
    setModalTask(DUMMY_CURRENT_TASK);
    setShowModal(false);
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
        displayModal={displayModal}
      />
      <TaskModal
        currentTask={modalTask}
        submitType={modalActionType}
        showModal={showModal}
        hideModal={hideModal}
        updateTaskList={updateTaskList}
      />
      <MainContent
        pageType={pageType}
        allTasks={allTasks}
        updateTaskList={updateTaskList}
        sortTasks={sortTasks}
        displayModal={displayModal}
      />
    </div>
  );
};

export default App;
