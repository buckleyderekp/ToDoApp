
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import { TaskList } from "./components/tasks/taskList";
import "./todoDashboard.scss"
import Header from "./header";
import Footer from "./footer";


//this component will handle dashboard components such as the tabs, main container, list and button to open form 
const TodoDashboard = ({ tasksData, fetchTasks }) => {
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    useEffect(() => {
        fetchTasks()
    }, [])
    const [activeList, setActiveList] = useState("notCompleted")
    return tasksData.loading ? (
        <div>Loading</div>
    ) : tasksData.error ? (
        <div>{tasksData.error}</div>
    ) : (
        <>
            <div className="task_container">
                <Header setActiveList={setActiveList} activeList={activeList} />
                <TaskList tasks={tasksData.tasks} />
                <Footer modal={modal} toggle={toggle} />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        tasksData: state.tasks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(actions.fetchTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);

