import { useContext, useEffect } from 'react';
import { RemindersContext } from './context';
import './App.css';
import RemindersContainer from './components/RemindersContainer';
import Landing from './components/Landing';
import { fetchReminders } from './services';

function App() {
  const { reminders, setReminders } = useContext(RemindersContext);

  useEffect(() => {
    fetchReminders()
    .then(data => setReminders(data))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
        {
          reminders.length === 0 
          ? <Landing /> 
          : <RemindersContainer />
        }
    </div>
  );
}

export default App;
