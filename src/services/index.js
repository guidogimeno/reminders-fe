import axios from 'axios';

const HOST = "https://reminders-be-production.up.railway.app"

export const fetchReminders = () => {
  return axios.get(HOST)
  .then(response => response.data || [])
  .catch(error => error);
};

export const createReminder = (reminder) => {
  return axios.post(HOST, reminder)
  .then(response => response.data)
  .catch(error => error);
};

export const updateReminder = (reminder) => {
  return axios.put(`${HOST}/${reminder.id}`, reminder)
  .then(response => response.data)
  .catch(error => error);
};

export const deleteReminder = (id) => {
  return axios.delete(`${HOST}/${id}`)
  .then(response => response.data)
  .catch(error => error);
};