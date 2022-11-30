import { ADD_TASK, CHANGE_TASK, REMOVE_TASK } from '../Constants/constants';

const initialState = {
  tasks: []
};

export default function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case CHANGE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task)
      };
    default:
      return state;
  }
}