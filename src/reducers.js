import * as actions from "./actionTypes";
import Redux, {combineReducers} from "redux";
import userReducer from "./components/users/userReducer";
import taskReducer from "./components/tasks/taskReducer";


//the purpose of this component is to combine reducers in to one rootReducer for the redux store

const rootReducer = combineReducers({
    user: userReducer,
    tasks: taskReducer
})

export default rootReducer;
