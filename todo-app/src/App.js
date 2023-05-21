import './App.css';
import MainContent from './components/mainContent';
import Navigation from './components/navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <MainContent />
      <MainContent />
    </div>
  );
};

export default App;
