
import React, { useEffect, useState } from "react";
import store from "./store";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import { TaskList } from "./components/tasks/taskList";
import "./todoDashboard.scss"
import Header from "./header";


//this component will hold the lists of tasks. Both lists of tasks will be displayed by the same component but the props past to the list component will 
//change based on the selection of the user. The active list will be managed in this component with useState
const TodoDashboard = props => {
    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch();
    const [activeList, setActiveList] = useState("incomplete")
    console.log(tasks)
    return (
        <>
            <div className="task_container">
                <Header/>
                <TaskList tasks={tasks} />
            </div>
            {/* <button onClick={()=> store.dispatch(actions.login())} >Log Out</button> */}
        </>
    )
}


export default TodoDashboard;

