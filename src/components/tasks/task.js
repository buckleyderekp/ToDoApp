import React from "react";
import "./task.scss";
import { BsCheck } from "react-icons/bs"

const Task = task => {
    return (
        <div className="taskListItemContainer">
            <div></div>
            <div className="taskDescription"> {task.task.description}</div>
        </div>
    )
};
export default Task;