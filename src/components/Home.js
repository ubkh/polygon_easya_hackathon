import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';

import "./App.css";
import Chart from "./Chart.js";

class Home extends Component {
    render() {
        return ( 
            <>
            <h1>Home</h1>
            
            <Chart />
            </>
        );
    }
}

export default Home;
