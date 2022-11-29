import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTaskAction } from '../store/actionCreators';

function InputArea () {
  const dispatch = useDispatch();

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
      addTask(value.trim());
      setValue('');
    }
  };
  const handlerKeyPress = () => {
    if (value.trim()) {
      addTask(value.trim());
      setValue('');
    }
  };
  const changed = (e) => (setValue(e.target.value));

  return (
        <div>
            <input type="text" placeholder="ENTER YOUR TODO"
                   value={value}
                   onChange={changed}
                   onKeyDown={handlerAddTask}/>
            <button onClick={handlerKeyPress} value={value}>ADD</button>
        </div>
  );
}

export default InputArea;