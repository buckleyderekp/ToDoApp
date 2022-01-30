
import React, { useEffect } from "react";
import store from "./store";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import  TaskList  from "./components/tasks/taskList";

export const TodoDashboard = () => {
    console.log(actionTypes)
   const unsubscribe =  store.subscribe(()=> console.log("changed", store.getState()));
    return (
        <>
            <TaskList/>
            {/* <button onClick={()=> store.dispatch(actions.login())} >Log Out</button> */}
        </>
    )
}

