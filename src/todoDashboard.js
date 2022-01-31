
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import * as actions from "./actionCreater";
import { actionTypes } from "./actionTypes";
import { TaskList } from "./components/tasks/taskList";
import "./todoDashboard.scss"
import Header from "./header";
import Footer from "./footer";


//this component will handle dashboard components such as the tabs, main container, list and button to open form 
const TodoDashboard = ({fetchTasks}) => {
    useEffect(()=>{
        fetchTasks()
    },[])
    const tasks = useSelector(state => state.tasks.tasks)
    const [activeList, setActiveList] = useState("notCompleted")
    return (
        <>
            <div className="task_container">
                <Header setActiveList={setActiveList} activeList={activeList}/>
                <TaskList tasks={tasks} />
                <Footer/>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        taskData: state.tasks
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchTasks: () => dispatch(actions.fetchTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDashboard);

