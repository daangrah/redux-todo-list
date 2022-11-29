import {addManyTasksAction} from "../store/taskReducer";

// eslint-disable-next-line import/prefer-default-export,func-names
export const fetchCustomers = () => function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyTasksAction(json)))
    }