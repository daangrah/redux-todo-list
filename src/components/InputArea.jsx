import React, {useState} from 'react';


// eslint-disable-next-line react/prop-types
function InputArea(addTask) {

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
        // eslint-disable-next-line react/jsx-filename-extension
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