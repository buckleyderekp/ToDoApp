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
//fetches tasks 
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
//returns action to add task
export const addTaskRequest = () =>{
    return{
        type: actionTypes.taskActions.ADD_TASK_REQUEST
    }
}
//returns action to indicate adding was successful
export const addTaskSucess = tasks => {
    return{
        type: actionTypes.taskActions.ADD_TASK_SUCCESS,
        payload: tasks
    }
}
//returns action to indicate add failed
export const addTaskFailure = error => {
    return{
        type: actionTypes.taskActions.FETCH_TASKS_FAILURE,
        payload: error
    }
}
//adds a tasks currently saves an empty object to the db but values are not being passed through. Will address after writing tests
export const addTask = (values) =>{
    return (dispatch) =>{
        dispatch(addTaskRequest)
        axios.post("http://localhost:8088/tasks", values)
        .then(response =>{
            console.log(response)
        })
    }
}