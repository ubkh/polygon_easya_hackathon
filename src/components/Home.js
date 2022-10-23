import React, { Component } from "react";
import  {Link} from 'react-router-dom';

import "./App.css";
import Chart from "./Chart.js";
import Navigator from "./Navbar/navbar.js";
import Blocks from "./block.js"

class Home extends Component {
    render() {
        return ( 
            <>
            <Navigator/>
            <div align="center">
                <h1>Your home for help</h1>
                <div style={{width: "50vw"}}>
                <p>Donate to a cause of your choice, where your vote will contribute towards the allocation of a sum of money fundraised by the community, to a sector with highest number of votes</p>
                </div>
                <div class= "bigassbutton" >
                <Link to="/donate" class="btn btn-primary rounded-pill btn-lg">Donate</Link>
                </div>
            </div>

            <br/><br/><br/><br/><br/>
            <Blocks/>

            <Chart />
            </>
        );
    }
}

export default Home;
