import React from "react";
import "./task.scss";

//handles displaying one task item in the tasklist
const Task = task => {
    return (
        <div className="taskListItemContainer">
            <div className="listItemCheckbox"></div>
            <div className="taskDescription"> {task.task.description}</div>
        </div>
    )
};
export default Task;