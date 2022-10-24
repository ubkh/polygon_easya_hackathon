import React, { Component } from "react";
import  {Link} from 'react-router-dom';

import "./App.css";
import Chart from "./Chart.js";
import Category from "./Categories.js"

import NavigatorPages from "./Navbar/navbarPage.js";

const Home = () => {
    return ( 
        <>
        <div align="center">
            <h1>Your home for help</h1>
            <div style={{width: "50vw"}}>
            <p>Donate to a cause of your choice, where your vote will contribute towards the allocation of a sum of money fundraised by the community, to a sector with highest number of votes</p>
            </div>
            <div class= "bigassbutton" >
            <Link to="/donate" class="link">Donate</Link>
            </div>
        </div>

        <Category/>

        <Chart />
        </>
    );
}

export default Home;
