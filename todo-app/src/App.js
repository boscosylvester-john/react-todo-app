import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import { PAGE_TYPES } from './constants';

const App = () => {
  const [pageType, setPageType] = useState(
    PAGE_TYPES.TASKS
  );

  return (
    <div>
      <Navigation setPageType={setPageType} />
      <MainContent pageType={pageType} />
    </div>
  );
};

export default App;
