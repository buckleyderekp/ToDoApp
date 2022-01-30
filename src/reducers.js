import * as actions from "./actionTypes";
import Redux, {combineReducers} from "redux";
import userReducer from "./components/users/userReducer";
import taskReducer from "./components/tasks/taskReducer";

const rootReducer = combineReducers({
    user: userReducer,
    tasks: taskReducer
})

export default rootReducer;
