import React, { Component } from "react";
import SimpleContract from "../abis/SimpleContract.json";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import polygonlogo from './images/polygonlogo.png';
import "./App.css";
import NavigatorPages from "./Navbar/navbarPage.js";
import { sc , account } from "./App.js";

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


class Donate extends Component {
    render() {
        return ( 
            <>
            <div align="center">
            <NavigatorPages/>
                <h1>Donate</h1>
               
                <form>
                    <div style={{ transform: "translate3d(0.15em, 0, 0)"}}>
                    <img src={polygonlogo} alt="Polygon Logo" width="30" height="30" style={{ transform: "translate3d(-0.3em, -0.4em, 0)"}}/>
                    <input type="number" min="0" class="donationAmount" label="Donation Amount" step="0.1" placeholder="1"/>
                    </div>
                    <br/><br/>
                    <button onClick={ this.handleClick } type="submit">Donate</button>
                </form>
                
            </div>
            </>
        );
    }
}

export default Donate;