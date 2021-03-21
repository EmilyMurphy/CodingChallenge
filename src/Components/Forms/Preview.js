import React from "react";
import "../Styles/Preview.css";
//Simple Preview Component to pass props between components
const Preview = (props) => {

    return (
        <ul classname = "list">Person:
            <li classname = "item">First Name: {props.firstName}</li>
            <li classname = "item">Age: {props.Age}</li>
            <li classname = "item">New: {props.New}</li>
        </ul>
    )};

export default Preview;

