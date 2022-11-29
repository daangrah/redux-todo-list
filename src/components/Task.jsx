import React from 'react';
import deleteimg from '../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteTaskAction } from '../store/actionCreators';

function Task (task, key) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTaskAction(task.id));
  return (

        <div key={key.id}>
            <div>
                {task.task.text}
            </div>
            <img src={deleteimg} alt="delete-icon"
                 className="delete-icon"
                 onClick={() => handleDelete(task)}
            />
        </div>
  );
}

export default Task;