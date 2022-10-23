import React, { Component } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import "./App.css";

import ContainerOutsideExample from "./Navbar/navbar.js";
import ParticlesBackground  from "./background/ParticlesBackground";

import Header from "./Header/header.js";


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
        <ContainerOutsideExample />
      
      </>
    );
  }
}


export default App;
