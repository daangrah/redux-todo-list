import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {taskReducer} from "./taskReducer";

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)))