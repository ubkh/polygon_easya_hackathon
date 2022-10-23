import React, { Component } from "react";
import Web3 from "web3";
import  {BrowserRouter, Route, Link} from 'react-router-dom';

import Chart from "./Chart.js";
import "./style.css";

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   // console.log(e.key);

//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });


class Blocks extends Component {

    // openModal() {
    //     const modal = document.querySelector(".modal");
    //     const overlay = document.querySelector(".overlay");
    //     modal.classList.remove("hidden");
    //     overlay.classList.remove("hidden");
    // };

    
    // closeModal() {
    //     const modal = document.querySelector(".modal");
    //     const overlay = document.querySelector(".overlay");
    //     modal.classList.add("hidden");
    //     overlay.classList.add("hidden");
    // };

    // changeText1() {
    //     document.getElementById("p1").innerHTML =
    //         "<h1>Health Charities</h1> <p> <li>Mind</li> <li>Age Scotland</li> <li>Macmillan</li> <li>Breast Cancer Now</li> <li>Diabetes UK</li> </p>";
    //         this.openModal();
    //         this.closeModal();

    //     }

    // changeText2() {
    //     document.getElementById("p1").innerHTML =
    //         "<h1>Education Charities</h1> <p> <li>The Literacy Pirates Limited</li> <li>Inspire!</li> <li>The Turing Trust</li> <li>Pebbles Project</li> <li>Life Skills Education Charity</li> </p>";
    //     }
    
    // changeText3() {
    //     document.getElementById("p1").innerHTML =
    //         "<h1>Environment Charities</h1> <p> <li>Trees for Cities</li> <li>The Rivers Trust</li> <li>Blue Marine Foundation</li> <li>National Biodiversity Network Trust</li> <li>Sand Dams Worldwide Limited</li> </p>";
    //     }
    
    // changeText4() {
    //     document.getElementById("p1").innerHTML =
    //         "<h1>Animal Charities</h1> <p> <li>Freshwater Habitats Trust</li> <li>Mane Chance Sanctuary</li> <li>The British Horse Society</li> <li>The Vincent Wildlife Trust</li> <li>Bumblebea Conservation Trust</li> </p>";
    //     }

    // changeText5() {
    //     document.getElementById("p1").innerHTML =
    //         "<h1>Human Services</h1> <p> <li>Direct Relief</li> <li>World Vision</li> <li>Lifeline Commnity Projects</li> <li>Brian Mercer Trust</li> <li>National Alliance to End Homelessness</li> </p>";
    //     }

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