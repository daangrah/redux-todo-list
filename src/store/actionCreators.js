import { ADD_TASK, CHANGE_TASK, REMOVE_TASK, SET_TASKS } from '../Constants/constants';

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: REMOVE_TASK, payload });
export const changeTaskAction = (payload) => ({ type: CHANGE_TASK, payload });
export const setTasksAction = (payload) => ({ type: SET_TASKS, payload });