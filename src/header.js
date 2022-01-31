import React from "react";
import { BsListTask, BsCalendarCheck } from "react-icons/bs";
import "./header.scss";

const Header = () =>{
    return(
        <div className="header">
        <div className="header_tab"><BsListTask style={{color: "#a781cf", fontSize: "2.5em", marginTop: "10%"}}/></div>
        <div className="header_tab notActive"><BsCalendarCheck style={{color: "#cacaca", fontSize: "2em", marginTop: "10%"}}/></div>
        </div>
    )
}

export default Header