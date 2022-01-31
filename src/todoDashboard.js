
import React, { useEffect, useState } from "react";
import store from "./store";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import { TaskList } from "./components/tasks/taskList";
import "./todoDashboard.scss"
import Header from "./header";
import Footer from "./footer";


//this component will handle dashboard components such as the tabs, main container, list and button to open form 
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
                <Footer/>
            </div>
            {/* <button onClick={()=> store.dispatch(actions.login())} >Log Out</button> */}
        </>
    )
}


export default TodoDashboard;

