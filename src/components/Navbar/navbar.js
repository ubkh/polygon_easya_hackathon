import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import "./navbarStyles.css";

function ColorSchemesExample() {
  return (
    <>

   
<header>
  <div class="hero">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">

        <a class="navbar-brand" href="#"><img src="https://www.dropbox.com/s/wwe8870bgswddz1/200x100logo_White_Transparent.png?raw=1" target="blank" alt="logo" height="100"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Donate</a>
            </li>
            <div class="social soci-mobile">
              <a href="https://www.facebook.com/ewebdesigns/" target="blank" class="fa fa-facebook-square"></a>
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
              <i class="fa fa-github" aria-hidden="true"></i>
            </div>
          </ul>

        </div>
      </nav>
      <div class="hero-heading">
        <h1>Your home for help</h1>
        <div class="hero-sub-title mt-5">
          <a href="#" class="text-white"><i class="fa fa-play-circle"></i> Donate to a cause of your choice, your vote will contribtue to the sum of money fundraised by the commmunity and will be allocated to a sector with the highest number of</a>
        </div>
      </div>

    </div>
  </div>
</header>



    </>
  );
}

export default ColorSchemesExample;