
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "./actionCreater";
import { TaskList } from "./components/tasks/taskList";
import "./todoDashboard.scss"
import Header from "./header";
import Footer from "./footer";


//this component will handle dashboard components such as the tabs, main container, list and button to open form 
const TodoDashboard = ({ tasksData, fetchTasks, login }) => {
    //handle opening and closing of form modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    //dispatch action to fetch tasks on payload
    useEffect(() => {
        //"login" user on page load. This user is hard coded but will be moved to database and and be dynamic when login and registration is complete
        login()
        fetchTasks()
    }, [])
    //manage list of tasks for completed or notCompleted
    const [activeList, setActiveList] = useState("notCompleted")
    //if tasks.Data is true show "Loading"
    return tasksData.loading ? (
        <div>Loading</div>
        //if its not loading check if there is an error and display error
    ) : tasksData.error ? (
        <div>{tasksData.error}</div>
        //if its not loading and there is no error display content
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
//make tasks part of the props for this component
const mapStateToProps = state => {
    return {
        tasksData: state.tasks
    }
}
//make fetchTasks part of the props for this component
const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(actions.fetchTasks()),
        login: () => dispatch(actions.login())
    }
}
// connect to redux store
export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);

