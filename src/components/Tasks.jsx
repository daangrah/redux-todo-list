import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import deleteimg from "../assets/delete.png";
import {deleteTaskAction} from "../store/actionCreators";

function Tasks() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const deleteTask = (task) => {
        dispatch(deleteTaskAction(task.id))
    }
    return (
        <div>
            <div>
                {tasks.length > 0 ?
                    <div>
                        {tasks.map(task => (
                            <div key={task.id}>
                                {task.text}
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <div onClick={() => deleteTask(task)}>
                                    <img src={deleteimg} alt="delete-icon"
                                         className="delete-icon"

                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div>NO TASKS YET</div>
                }
            </div>
        </div>
    );
}

export default Tasks;