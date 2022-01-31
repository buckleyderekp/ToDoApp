import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const Footer = () =>{
    const plusButtonStyle = {color: "#ffba74", fontSize: "4.2em", bottom: 0}
    return(
        <div className="footer">
            <AiFillPlusCircle className="addTaskButton" onClick={() => console.log("click!")} style={plusButtonStyle}/>
        </div>
    )
}

export default Footer;