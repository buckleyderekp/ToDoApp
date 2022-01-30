import React from "react";


//this component will be responsible for displaying a list of tasks in the UI
export const TaskList = ({ tasks }) =>{
console.log(tasks)
    return(
        tasks.map((task)=>{
            return(
                <div>
                <div>{task.description}</div>
                </div>
            )

        })

    )
}
