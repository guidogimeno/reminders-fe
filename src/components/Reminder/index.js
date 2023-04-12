import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Reminder = (props) => {
  const { title, description, onTitleChange, onDescriptionChange, onClose } = props;

  return (
    <div className="reminder">
      <div className="reminder-content">
        <input 
          className="reminder__title" 
          type="text" 
          defaultValue={title} 
          placeholder="Escriba un titulo..."
          onChange={(event) => onTitleChange(event.target.value)}
        />
        <textarea 
          className="reminder__description" 
          type="text" 
          defaultValue={description}
          placeholder="Escriba una descripcion..."
          onChange={(event) => onDescriptionChange(event.target.value)}
          onInput={(event) => {
            event.target.style.height = 'auto';
            event.target.style.height = `${event.target.scrollHeight}px`;
          }}
        />
      </div>      
      <FontAwesomeIcon icon={faTrashAlt} className="reminder__close-btn" onClick={onClose}/>
    </div>
  );
};

export default Reminder;