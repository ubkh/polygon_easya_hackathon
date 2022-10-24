import React from "react";
import  {Link} from 'react-router-dom';

const Donated = () => {
    return (
        <>
        <div align="center" style={{margin:"15em 0 0 0"}}>
            <h1><b>Your donation has been sent successfully</b></h1>
            <p>Thank you for donating, if this is your first donation, please take a chance to vote on where we should allocate these funds</p> 

            <br/>
            <Link class="btn btn-sm btn-light btn-outline-primary" to="/vote">Vote Now</Link>
        </div>
        </>
    );
}

export default Donated;