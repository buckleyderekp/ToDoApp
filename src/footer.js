import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from 'react-modal';
import TasksForm from "./components/tasks/taskForm";

//this component displays the bottom of the dashboard and opens the form modal 
const Footer = ({modal, toggle}) =>{
    //all resources I found used inline styles to style the icons and I wasn't able to find another way 
    //that is also tru for the modal package I used to open the modal 
    const plusButtonStyle = {color: "#ffba74", fontSize: "4.2em", bottom: 0}
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      //display icon and open modal 
    return(
        <div>
        <div className="footer">
            <AiFillPlusCircle className="addTaskButton" onClick={() => toggle()} style={plusButtonStyle}/>
        </div>
        <Modal ariaHideApp={false} style={customStyles} isOpen={modal} onRequestClose={toggle}>
            <TasksForm modal={modal} toggle={toggle}/>
        </Modal>
        </div>
    )
}

export default Footer;