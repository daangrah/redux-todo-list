import React, { useState } from 'react';
import deleteimg from '../assets/delete.png';
import editImg from '../assets/edit.png';
import { useDispatch } from 'react-redux';
import { changeTaskAction, deleteTaskAction } from '../store/actionCreators';
import '../App.css';

// import { nanoid } from 'nanoid';

function Task (task, key) {
  const [edit, setEdit] = useState(false);
  const [item, setNewItem] = useState(task.task.text);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
      dispatch(changeTaskAction({ id: task.id, text: item }));
    }
  };

  const handleDelete = (task) => dispatch(deleteTaskAction(task.id));
  if (edit) {
    return (
                <input
                    className="input-change"
                    value={item}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Edit your list"
                    onKeyDown={handleSubmit}
                />
    );
  }

  return (

        <div key={key.id} className='task-area' >
            <div className='task-text'>
                {task.task.text}
            </div>
            <div className='icon-bar'>
                <img src={deleteimg} alt="delete-icon"
                 className="delete-icon"
                 onClick={() => handleDelete(task)}
                />
                <img src={editImg} alt='edit-icon'
                className='edit-icon'
                onClick={() => setEdit(true)}
                />
            </div>
        </div>
  );
}

export default Task;