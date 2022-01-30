import { initialState } from "./initialState";
import { actionTypes } from "../../actionTypes";

function userReducer(state = initialState, action) {
    console.log(action.type, actionTypes.userActions.LOGIN)
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