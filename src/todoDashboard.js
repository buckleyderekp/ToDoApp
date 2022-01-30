
import React, { useEffect, useState } from "react";
import store from "./store";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import { TaskList }  from "./components/tasks/taskList";


//this component will hold the lists of tasks. Both lists of tasks will be displayed by the same component but the props past to the list component will 
//change based on the selection of the user. The active list will be managed in this component with useState
export const TodoDashboard = () => {
    const [activeList, setActiveList ] = useState("incomplete")
    console.log(actionTypes)
   const unsubscribe =  store.subscribe(()=> console.log("changed", store.getState()));
    return (
        <>
            <TaskList/>
            {/* <button onClick={()=> store.dispatch(actions.login())} >Log Out</button> */}
        </>
    )
}

