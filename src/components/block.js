import React, { Component } from "react";
import "./style.css";


class Blocks extends Component {

    render() {
        return ( 
            <>
            <br/><br/><br/><br/>
            <h1 align="center">Categories</h1>
            <div class="grid" align="center">
                <btn class="item1btn">
                    <button class="show-modal"><div class="text">Hunger</div></button>
                </btn>

                <btn class="item2btn">
                    <div class="show-modal">
                    <div class="text">Health</div>
                    </div>
                </btn>

                <btn class="item3btn">
                    <div class="show-modal">
                    <div class="text">Education</div>
                    </div>
                </btn>

                <btn class="item4btn">
                    <div class="show-modal">
                    <div class="text">Environment</div>
                    </div>
                </btn>

                <btn class="item5btn">
                    <div class="show-modal">
                    <div class="text">Animal</div>
                    </div>
                </btn>

                <btn class="item6btn">
                    <div class="show-modal">
                    <div class="text">Human Services</div>
                    </div>
                </btn>

                <div class="modal hidden">
                    <button class="close-modal">&times;</button>
                    <div id="p1">
                    <h1>Hunger Relief</h1>
                    <p>
                        <li>World Food Programme</li>
                        <li>Action Against Hunger</li>
                        <li>The Hunger Project</li>
                        <li>Rise Against Hunger</li>
                        <li>World Central Kitchen</li>
                    </p>
                    </div>
                </div>

                <div class="overlay hidden"></div>
            </div>
            </>
            );
        }
}

export default Blocks;