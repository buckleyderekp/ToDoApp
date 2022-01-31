import { taskActions } from "./components/tasks/taskActions";
import { userActions } from "./components/users/userActions";

//this is the component that will combine all action types from all directories in to one source that can be imported as needed in the project
export const actionTypes = {
    taskActions,
    userActions
}