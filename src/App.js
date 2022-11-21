import './App.css';
import deleteimg from './assets/delete.png'
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import InputArea from "./components/InputArea";
import {nanoid} from "nanoid";

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
  return (
    <div className="App">
      <Header />
      <InputArea addTask={addTask}/>
        <div>
        {tasks.length > 0 ?
            <div>
                {tasks.map(task => (
                        <div key={task.id}>
                            {task.text}
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
