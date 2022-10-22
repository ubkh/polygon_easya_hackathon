import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import polygonlogo from './images/polygonlogo.png';
import "./App.css";

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

class Donate extends Component {
    constructor(){
        super();
        this.state = {value: '0.00'};
        this.onChange = this.onChange.bind(this)
     }
     
     onChange(e){
        if (isNumeric(e.target.value) || e.target.value == "") {
           this.setState({value: e.target.value})
        }
     }
    render() {
        return ( 
            <>
            <div align="center">
                <h1>Donate</h1>
               
                <form>
                    <div style={{ transform: "translate3d(0.15em, 0, 0)"}}>
                    <img src={polygonlogo} alt="Polygon Logo" width="30" height="30" style={{ transform: "translate3d(-0.3em, 0, 0)"}}/>
                    <input class="donationAmount" label="Donation Amount" value={this.state.value} onChange={this.onChange}/>
                    </div>
                    <br/><br/>
                    <button type="submit" class="btn btn-sm btn-light btn-outline-primary">Donate</button>
                </form>
                
            </div>
            </>
        );
    }
}

export default Donate;