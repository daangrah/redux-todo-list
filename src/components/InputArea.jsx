import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {nanoid} from "nanoid";

// eslint-disable-next-line react/prop-types
function InputArea() {
    const dispatch = useDispatch()

    const addTask = (text) => {
        const task = {
            text,
            id: nanoid()
        }
        dispatch({type:"ADD_TASK", payload:task})
    }
    const [value, setValue] = useState('')
    const addHandler = (e) => {
        if(e.key === "Enter" && value.trim()){
            addTask(value.trim())
            setValue('')
        }
    }
    const keyHandler = () => {
        if(value.trim()){
            addTask(value.trim())
            setValue('')
        }
    }
    const changed = (e) => (setValue(e.target.value))

    return (

        <div>
            <input type="text" placeholder="ENTER YOUR TODO"
                   value={value}
                   onChange={changed}
                   onKeyDown={addHandler}/>
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={keyHandler} value={value}>ADD</button>

        </div>
    );
}

export default InputArea;