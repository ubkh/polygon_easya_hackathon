import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';

import "./App.css";
import Home from "./Home.js";
import Donate from "./Donate.js";
import Vote from "./Vote.js";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    // Network ID
    const networkId = await web3.eth.net.getId();
    
  }

  render() {
    return (
      <>
      <div>
        <h1>Header</h1>
      </div>

      <BrowserRouter>
          <Route exact path="/"  component={Home}/>
          <Route path="/donate"  component={Donate}/>
          <Route path="/vote"  component={Vote}/>
      </BrowserRouter>
      </>
    );
  }
}

export default App;