const ADD_TASK = "ADD_TASK"
const REMOVE_TASK = "REMOVE_TASK"
const ADD_USERS = "ADD_USERS"

const initialState = {
    tasks: []
}

// eslint-disable-next-line default-param-last
export const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USERS:
            return {...state, tasks: [...state.tasks, ...action.payload]}
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        default:
            return state
    }

}

export const addTaskAction = (payload) => ({type: ADD_TASK, payload})
export const deleteTaskAction = (payload) => ({type: REMOVE_TASK, payload})
