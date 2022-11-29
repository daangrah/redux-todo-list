import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function Tasks () {
  const tasks = useSelector(state => state.tasks);

  return (
        <>
            {tasks.length > 0
              ? <div>
                    {tasks.map(task => (
                        <Task key={task.id} task={task} id={task.id}/>
                    ))}
                    </div>
              : <div>NO TASKS YET</div>
            }
        </>
  );
}

export default Tasks;