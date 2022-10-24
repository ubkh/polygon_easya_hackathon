import React from "react";
import  {Link} from 'react-router-dom';

import "./App.css";
import Chart from "./Chart.js";
import Category from "./Categories.js"

const Home = () => {
    return ( 
        <>
        <div align="center" style={{margin:"15em 0 0 0"}}>
            <h1><b>Your home for help</b></h1>
            <div style={{width: "50vw"}}>
            <p>Donate to a cause of your choice, where your vote will contribute towards the allocation of a sum of money fundraised by the community, to a category with the highest number of votes.</p>
            </div>
            <br></br>
            <div class= "bigassbutton" >
            <Link to="/donate" class="link">Donate</Link>
            </div>
        </div>

        <Category/>

        <Chart />
        </>
    );
}

export default Home;
