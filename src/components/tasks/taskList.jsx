import React from "react";
import Task from "./task";
import "./taskList.scss"

//this component will be responsible for displaying a list of tasks in the UI
export const TaskList = ({ tasks }) => {
    console.log(tasks)
    return (
        <div className="taskListContainer">
            {tasks && tasks.map((task) => {
                return (
                    <Task task={task}/>
                )

            })}
        </div>

    )
}
