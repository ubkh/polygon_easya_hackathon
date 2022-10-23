import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';

function Voted() {
    return (
        <>
        <div align="center">
            <h1>You have voted</h1>
            <p>Thank you for voting, your vote has been recorded</p>
        </div>
        </>
    );
}

export default Voted;