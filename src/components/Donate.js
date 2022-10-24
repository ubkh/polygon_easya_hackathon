import React, { Component } from "react";
import SimpleContract from "../abis/SimpleContract.json";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import polygonlogo from './images/polygonlogo.png';
import "./App.css";
import NavigatorPages from "./Navbar/navbarPage.js";

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

class Donate extends Component {

    constructor(props) {
        super(props);
        
        this.state = { amount: 0.001};

        // bound below - no need for this
        //this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ amount: event.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.amount);
        const web3 = window.web3;
        const sc = this.props.sc;
        const account = this.props.account;
        console.log(account);
        sc.methods.donate().send({
            from: account,
            value: web3.utils.toWei(this.state.amount, 'ether') 
        });
    }

    render() {
        return ( 
            <>
            <div align="center">
            <NavigatorPages/>
                <h1>Donate</h1>
               
                <form>
                    <div style={{ transform: "translate3d(0.15em, 0, 0)"}}>
                    <img src={polygonlogo} alt="Polygon Logo" width="30" height="30" style={{ transform: "translate3d(-0.3em, -0.4em, 0)"}}/>
                    <input type="number" min="0.001" className="donationAmount" label="Donation Amount" step="0.001" placeholder="0.001" value={ this.state.amount } onChange= { this.handleChange }/>
                    </div>
                    <br/><br/>
                    <button onClick={ event => this.handleClick(event) } type="submit">Donate</button>
                </form>
            </div>
            </>
        );
    }
}

export default Donate;