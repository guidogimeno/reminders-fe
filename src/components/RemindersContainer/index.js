import { useContext } from 'react';
import { debounce } from 'lodash';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { RemindersContext } from '../../context';
import Reminder from '../Reminder';
import NewReminderButton from '../NewReminderButton';
import { createReminder, deleteReminder, updateReminder } from '../../services';

const RemindersContainer = () => {
  const { reminders, addReminder, editReminder, removeReminder, setReminders } = useContext(RemindersContext);

  const handleAddReminder = () => {
    createReminder({ title: '', description: '' })
    .then(data => addReminder(data))
    .catch(error => console.error(error))
  }

  const handleDeleteReminder = (id) => {
    deleteReminder(id)
    .then(() => removeReminder(id))
    .catch(error => console.error(error))
  }

  const handleUpate = debounce(reminder => {
    updateReminder(reminder)
    .then(() => editReminder(reminder))
    .catch(error => console.error(error))
  }, 500);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newReminders = Array.from(reminders);
    const [reorderedReminder] = newReminders.splice(result.source.index, 1);
    newReminders.splice(result.destination.index, 0, reorderedReminder);

    setReminders(newReminders);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="reminders-container">
        <div className="reminders-container__header">
          <NewReminderButton onClick={handleAddReminder} />
        </div>        
          <Droppable droppableId="reminders">
            {(provided) => (
              <div className='reminders-container__body' {...provided.droppableProps} ref={provided.innerRef}>
                {reminders.map((reminder, index) => (
                  <Draggable key={reminder.id.toString()} draggableId={reminder.id.toString()} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Reminder 
                          title={reminder.title}
                          description={reminder.description}
                          onTitleChange={(title) => handleUpate({ ...reminder, title })}
                          onDescriptionChange={(description) => handleUpate({ ...reminder, description })}
                          onClose={() => handleDeleteReminder(reminder.id)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </div>
    </DragDropContext>
  )
};

export default RemindersContainer;
