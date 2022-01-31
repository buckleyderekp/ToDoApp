import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from 'react-modal';
import TasksForm from "./components/tasks/taskForm";
const Footer = ({modal, toggle}) =>{
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
    return(
        <div>
        <div className="footer">
            <AiFillPlusCircle className="addTaskButton" onClick={() => toggle()} style={plusButtonStyle}/>
        </div>
        <Modal style={customStyles} isOpen={modal} onRequestClose={toggle}>
            <TasksForm/>
        </Modal>
        </div>
    )
}

export default Footer;