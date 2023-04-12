import React, { createContext, useState } from 'react';

export const RemindersContext = createContext();

export const RemindersProvider = ({ children }) => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
    console.log([...reminders, reminder]);
  };

  const removeReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const editReminder = (updatedReminder) => {
    setReminders(reminders.map((reminder) => reminder.id === updatedReminder.id ? updatedReminder : reminder));
  };

  return (
    <RemindersContext.Provider value={{ 
        reminders, 
        addReminder, 
        removeReminder, 
        editReminder, 
        setReminders 
      }}
    >
      {children}
    </RemindersContext.Provider>
  );
};
