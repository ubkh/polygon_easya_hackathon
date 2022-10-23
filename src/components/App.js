import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SimpleContract from "../abis/SimpleContract.json";
import Web3 from "web3";

import "./App.css";
import Home from "./Home.js";
import Donate from "./Donate.js";
import Donated from "./Donated.js";
import Vote from "./Vote.js";
import Voted from "./Voted.js";


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
    const networkData = SimpleContract.networks[networkId];
    if (networkData) {
      const sc = new web3.eth.Contract(SimpleContract.abi, networkData.address);
      this.setState({ sc });

      console.log(await sc.methods.getVotesLen().call());

      const voteCount = await sc.methods.voteCount().call();
      this.setState({ voteCount });
      console.log(voteCount);
      console.log(accounts[0]);
      const vote = await sc.methods.checkVoted(accounts[0]).call();
      console.log(vote);
      //wait sc.methods.vote("health").send({from: accounts[0]});
      console.log(vote);
      console.log(voteCount);

      console.log(await sc.methods.getVoteCountByCat("health").call());

      await sc.methods.createCharity("0xb975468E6f03C870A5d5ef4c749bC29e943232F5", "1", "health", "").send({
        from: accounts[0]
      });
      await sc.methods.donate().send({
        from: accounts[0],
        value: web3.utils.toWei("0.0001", 'ether') 
      });
      await sc.methods.allocateFunds().call();

    } else {
      window.alert("SimpleContract contract not deployed to detected network.");
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      sc: null,
    };

  }

  render() {
    return (
      <>
      <div class="background">

      <BrowserRouter>
          <Route exact path="/"  component={Home}/>
          <Route path="/donate"  component={Donate}/>
          <Route path="/donated"  component={Donated}/>
          <Route path="/vote"  component={Vote}/>
          <Route path="/voted"  component={Voted}/>
      </BrowserRouter>
      </div>
      </>
    );
  }
}

export default App;
