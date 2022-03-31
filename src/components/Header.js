import React from "react";
import logo from "../images/logo.png"
export default function Header () {
    return (
        <div className="header"> 
        <img src={logo}></img>
        <div>my travel journal</div>
        </div>
    )
}