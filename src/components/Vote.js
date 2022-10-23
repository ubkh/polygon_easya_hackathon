import React, { Component } from "react";

import "./App.css";
import NavigatorPages from "./Navbar/navbarPage.js";

class Vote extends Component {
    render() {
        return (
            <>  
                <div align="center">
                <NavigatorPages/>
                <h1>Vote</h1>

                <form id="form">
                    <div class="text">Vote for a charity:</div>
                    <br/>
                    <div align="left">
                    <input type="radio" id="Option" name="catagory" value="Hunger" />
                    <label for="Hunger">Hunger</label><br />
                    <input type="radio" id="Option" name="catagory" value="Health" />
                    <label for="Health">Health</label><br />
                    <input type="radio" id="Option" name="catagory" value="Education" />
                    <label for="Education">Education</label><br />
                    <input type="radio" id="html" name="catagory" value="Environment" />
                    <label for="Environment">Environment</label><br />
                    <input type="radio" id="Option" name="catagory" value="Animal" />
                    <label for="Animal">Animal</label><br />
                    <input type="radio" id="Option" name="catagory" value="Human Services" />
                    <label for="Human Services">Human Services</label>
                    </div>

                    <br/>
                    <button type="submit">Vote</button>
                </form>

                </div>
            </>
        );
    }
}

export default Vote;