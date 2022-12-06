import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTaskAction } from '../store/actionCreators';

function InputArea () {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const addTask = (text) => {
    const task = {
      text,
      id: nanoid()
    };
    dispatch(addTaskAction(task));
  };
  const [value, setValue] = useState('');
  const handlerAddTask = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      sessionStorage.setItem('tasks', JSON.stringify(tasks));
      addTask(value.trim());
      setValue('');
    }
  };
  const handlerKeyPress = () => {
    if (value.trim()) {
      sessionStorage.setItem('tasks', JSON.stringify(tasks));
      addTask(value.trim());
      setValue('');
    }
  };
  const changed = (e) => (setValue(e.target.value));

  return (
        <div className='typing-area'>
            <input type="text" placeholder="ENTER YOUR TODO"
                   value={value}
                   onChange={changed}
                   onKeyDown={handlerAddTask}
                   className='input-area'
            />
            <button onClick={handlerKeyPress}
                    value={value}
                    className='add-button'> ADD </button>
        </div>
  );
}

export default InputArea;