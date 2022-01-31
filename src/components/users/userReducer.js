import { initialState } from "./initialState";
import { actionTypes } from "../../actionTypes";


//this component will manage the state of the user including login, and any changes
function userReducer(state = initialState, action) {
    if (action.type == actionTypes.userActions.LOGIN) {
        return ({
            ...state,
            user: {
                name: "Derek Buckley",
                email: "buckleyderekp@gmail.com",
                userId: 1,
                userType: "Admin"
            }
        })
    }
    return state;
}

export default userReducer;