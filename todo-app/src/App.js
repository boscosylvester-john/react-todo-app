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

  const [filteredTasks, setFilteredTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [modalTask, setModalTask] = useState(
    DUMMY_CURRENT_TASK
  );

  const [modalActionType, setModalActionType] = useState(
    MODAL_ACTION_TYPE.NONE
  );

  const updateTaskList = (changedTask, action) => {
    let updatedList = Object.assign([], filteredTasks);
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
    setFilteredTasks(updatedList);
  };

  const sortTasks = (sortby, isSortAsc) => {
    let sortedTasks = Object.assign([], filteredTasks);
    switch (sortby) {
      case SORTING_OPTIONS.DEFAULT:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return isSortAsc ? t1.id - t2.id : t2.id - t1.id;
        });
        break;
      case SORTING_OPTIONS.DUE_DATE:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return isSortAsc
            ? new Date(t1.dueDate) - new Date(t2.dueDate)
            : new Date(t2.dueDate) - new Date(t1.dueDate);
        });
        break;
      case SORTING_OPTIONS.REMINDER_DATE:
        sortedTasks = sortedTasks.sort((t1, t2) => {
          return isSortAsc
            ? new Date(t1.reminderDate) -
                new Date(t2.reminderDate)
            : new Date(t2.reminderDate) -
                new Date(t1.reminderDate);
        });
        break;
      default:
        break;
    }
    setFilteredTasks(sortedTasks);
  };

  const getNewTaskId = () => {
    return (
      Math.max(
        ...filteredTasks.map((task) => Number(task.id))
      ) + 1
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
      setFilteredTasks(result);
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
        filteredTasks={filteredTasks}
        updateTaskList={updateTaskList}
        sortTasks={sortTasks}
        displayModal={displayModal}
      />
    </div>
  );
};

export default App;
