import React, { Component } from "react";
import "./style.css";

function toggleInfo(num) {
    const catInfo = document.getElementById('catInfo' + num);
    const overlay = document.getElementById('overlay');

    if (catInfo.style.opacity === "1") {
        catInfo.style.opacity = "0";
        catInfo.style.zIndex = "-10";
        overlay.style.opacity = "0";
        overlay.style.zIndex = "-5";
        document.body.style.position = '';
        document.body.style.overflowY = '';
    }
    else {
        catInfo.style.opacity = "1";
        catInfo.style.zIndex = "10";
        overlay.style.opacity = "1";
        overlay.style.zIndex = "5";
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
        window.scrollTo(0, 0);
    }
    console.log(num);
}

function Categories() {
    return ( 
        <>
        <div align="center" style={{margin:"15em 0 0 0"}}>
        
        <h1>Categories</h1>
            <div class="categoryBox" onClick={() => toggleInfo(1)}>Hunger</div>
            <div class="categoryBox" onClick={() => toggleInfo(2)}>Health</div>
            <div class="categoryBox" onClick={() => toggleInfo(3)}>Education</div>
            <div class="categoryBox" onClick={() => toggleInfo(4)}>Environment</div>
            <div class="categoryBox" onClick={() => toggleInfo(5)}>Animal</div>
            <div class="categoryBox" onClick={() => toggleInfo(6)}>Human Services</div>
        </div>

        <div class="categoryInfo" id="catInfo1">
        <div class="close-modal" onClick={() => toggleInfo(1)}>&times;</div>

        <h1>Hunger Relief</h1>
          <p>
            <li>World Food Programme</li>
            <li>Action Against Hunger</li>
            <li>The Hunger Project</li>
            <li>Rise Against Hunger</li>
            <li>World Central Kitchen</li>
          </p>
        </div>

        <div class="categoryInfo" id="catInfo2">
        <div class="close-modal" onClick={() => toggleInfo(2)}>&times;</div>

        <h1>Health Charities</h1> 
            <p> 
                <li>Mind</li> 
                <li>Age Scotland</li>
                <li>Macmillan</li> 
                <li>Breast Cancer Now</li>
                <li>Diabetes UK</li> 
            </p>
        </div>

        <div class="categoryInfo" id="catInfo3">
        <div class="close-modal" onClick={() => toggleInfo(3)}>&times;</div>

        <h1>Education Charities</h1> 
            <p> 
                <li>The Literacy Pirates Limited</li> 
                <li>Inspire!</li> 
                <li>The Turing Trust</li> 
                <li>Pebbles Project</li> 
                <li>Life Skills Education Charity</li> 
            </p>
        </div>

        <div class="categoryInfo" id="catInfo4">
        <div class="close-modal" onClick={() => toggleInfo(4)}>&times;</div>

        <h1>Environment Charities</h1> 
            <p> 
                <li>Trees for Cities</li> 
                <li>The Rivers Trust</li> 
                <li>Blue Marine Foundation</li> 
                <li>National Biodiversity Network Trust</li> 
                <li>Sand Dams Worldwide Limited</li> 
            </p>
        </div>

        <div class="categoryInfo" id="catInfo5">
        <div class="close-modal" onClick={() => toggleInfo(5)}>&times;</div>

        <h1>Animal Charities</h1> 
            <p> 
                <li>Freshwater Habitats Trust</li> 
                <li>Mane Chance Sanctuary</li> 
                <li>The British Horse Society</li> 
                <li>The Vincent Wildlife Trust</li> 
                <li>Bumblebea Conservation Trust</li> 
            </p>
        </div>

        <div class="categoryInfo" id="catInfo6">
        <div class="close-modal" onClick={() => toggleInfo(6)}>&times;</div>

        <h1>Human Services</h1> 
            <p> 
                <li>Direct Relief</li> 
                <li>World Vision</li> 
                <li>Lifeline Community Projects</li> 
                <li>Brian Mercer Trust</li> 
                <li>National Alliance to End Homelessness</li> 
            </p>
        </div>

        <div class="overlay" id="overlay"></div>
        </>
        );
}

export default Categories;