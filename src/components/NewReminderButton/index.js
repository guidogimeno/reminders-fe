const NewReminderButton = (props) => {
  const { onClick } = props;

  return (
    <button className="new-reminder-button" onClick={onClick}>
      Nuevo recordatorio
    </button>
  )
};

export default NewReminderButton;