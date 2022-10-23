import React from "react";

import NavigatorPages from "./Navbar/navbarPage.js";

function Voted() {
    return (
        <>
        <div align="center">
            <NavigatorPages/>
            <h1>You have voted</h1>
            <p>Thank you for voting, your vote has been recorded</p>
        </div>
        </>
    );
}

export default Voted;