import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import React from "react";
import deleteimg from './assets/delete.png'
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import {fetchCustomers} from "./async/customers";

function App() {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const addTask = (text) => {
        const task = {
            text,
            id: nanoid()
        }
        dispatch({type:"ADD_TASK", payload:task})
    }
    const deleteTask = (task) => {
        dispatch({type:"REMOVE_TASK", payload:task.id})
    }
    const addTodoHandler = () => {
        dispatch(fetchCustomers())
    }
  return (
    <div className="App">
      <Header />
      <InputArea addTask={addTask}/>
        <div>
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={addTodoHandler}>Подгрузить с сервака</button>
        {tasks.length > 0 ?
            <div>
                {tasks.map(task => (
                        <div key={task.id}>
                            {task.text}
                            {task.name}
                            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                            <div onClick={()=>deleteTask(task)}>
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

export default App;
