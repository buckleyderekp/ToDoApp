import { actionTypes } from "./actionTypes"
import axios from "axios";

//this component will hold all of the action creaters for the project
export const login = () =>({
    type: actionTypes.userActions.LOGIN
})
//returns action to fetch tasks
export const fetchTasksRequest = () =>{
    return{
        type: actionTypes.taskActions.FETCH_TASKS_REQUEST
    }
}
//returns action to indicate fetching tasks was successful
export const fetchTasksSucess = tasks => {
    return{
        type: actionTypes.taskActions.FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}
//returns action to indicate fetch failed
export const fetchTasksFailure = error => {
    return{
        type: actionTypes.taskActions.FETCH_TASKS_FAILURE,
        payload: error
    }
}
//fetches tasks this may need to go in a reducer
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