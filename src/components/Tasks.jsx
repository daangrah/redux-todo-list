import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function Tasks () {
  const tasks = useSelector(state => state.tasks);

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