import { useContext } from 'react';
import { RemindersContext } from '../../context';
import logo from '../../remembrall.png';
import NewReminderButton from '../NewReminderButton';
import { createReminder } from '../../services';

const Landing = () => {
  const { addReminder } = useContext(RemindersContext);

  const handleAddReminder = () => {
    createReminder({ title: '', description: '' })
    .then(data => addReminder(data))
    .catch(error => console.error(error))
  }

  return (
    <div className='landing'>
      <img src={logo} className="app-logo" alt="logo" />
      <p>Crea un nuevo recordatorio</p>
      <NewReminderButton onClick={handleAddReminder}/>
    </div>
  )
};

export default Landing;