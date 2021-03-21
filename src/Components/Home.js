
import React from "react";
import { Link } from 'react-router-dom';
import './Styles/Home.css'
//Used for routing of the separate sections 
const Home = () =>  {
        return (
          <div>
          <h2>Coding Assignment: Emily Murphy </h2> 
          <h3>Please select either Form or DateTime: </h3>
          <div className = "btn">
            <Link to="/Form">Form </Link>
            </div>
            <br></br>
            <div className = "btn">
            <Link to="/Main">DateTime </Link>
            </div>
          </div>
        );
      };
export default Home;
