import { actionTypes } from "./actionTypes"
import axios from "axios";

//this component will hold all of the action creaters for the project
export const login = () =>({
    type: actionTypes.userActions.LOGIN
})

export const fetchTasksRequest = () =>{
    return{
        type: actionTypes.taskActions.FETCH_TASKS_REQUEST
    }
}

export const fetchTasksSucess = tasks => {
    return{
        type: actionTypes.taskActions.FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}
export const fetchTasksFailure = error => {
    return{
        type: actionTypes.taskActions.FETCH_TASKS_FAILURE,
        payload: error
    }
}

export const fetchTasks = () =>{
    return (dispatch) => {
        dispatch(fetchTasksRequest)
        axios.get("http://localhost:8088/tasks")
        .then(response => {
            const tasks = response.data
            dispatch(fetchTasksSucess(tasks))
        })
        .catch(error =>{
            const errorMessage = error.message
            dispatch(fetchTasksFailure(errorMessage))
        })
    }
}