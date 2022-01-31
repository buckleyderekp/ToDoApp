import { initialState } from "./initialState";
import { actionTypes } from "../../actionTypes";

//this component will manage the state of the tasks
function taskReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.taskActions.FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.taskActions.FETCH_TASKS_SUCCESS:
            return {
                loading: false,
                tasks: action.payload,
                error: ""
            }
        case actionTypes.taskActions.FETCH_TASKS_FAILURE:
            return {
                loading: false,
                tasks: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default taskReducer;