import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { setTasksAction } from '../store/actionCreators';

function Tasks () {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  // useEffect(() => { }, [tasks]);
  useEffect(() => {
    const tasks = JSON.parse(sessionStorage.getItem('tasks'));
    console.log(tasks);
    dispatch(setTasksAction(tasks));
  }, []);
  return (
        <div>
            {tasks.length > 0
              ? <div className='task-pos'>
                    {tasks.map(task => (
                        <Task key={task.id} task={task} id={task.id}/>
                    ))}
                </div>
              : <div>NO TASKS YET</div>
            }
        </div>
  );
}

export default Tasks;