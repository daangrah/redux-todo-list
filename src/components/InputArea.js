import React, {useState} from 'react';

const InputArea = ({addTask}) => {
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
            <button onClick={keyHandler} value={value}>ADD</button>
        </div>
    );
};

export default InputArea;