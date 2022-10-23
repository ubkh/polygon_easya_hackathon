import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';


function Donated() {
    return (
        <>
        <div align="center">
            <h1>Your donation has been sent successfully</h1>
            <p>Thank you for donating, if this is your first donation, please take a chance to vote on where we should allocate these funds</p> 

            <br/>
            <Link class="btn btn-sm btn-light btn-outline-primary" to="/vote">Vote Now</Link>
        </div>
        </>
    );
}

export default Donated;