import React from "react";
import { BsListTask, BsCalendarCheck } from "react-icons/bs";
import "./header.scss";

//the purpose of this component is to manage the tabs at the top of the dashboard 
const Header = ({ setActiveList, activeList }) => {
    return (
        <div className="header">
            <div className={activeList === "notCompleted" ? "header_tab activeLeft" : "header_tab notActiveLeft"}
                onClick={() => setActiveList("notCompleted")}>
                <BsListTask style={{ color: activeList === "notCompleted" ? "#a781cf" : "#cacaca", fontSize: "2.5em", marginTop: "10%" }} />
            </div>
            <div className={activeList === "completed" ? "header_tab activeRight" : "header_tab notActiveRight"}
                onClick={() => setActiveList("completed")}>
                <BsCalendarCheck style={{ color: activeList === "completed" ? "#a781cf" : "#cacaca", fontSize: "2em", marginTop: "10%" }} />
            </div>
        </div>
    )
}

export default Header