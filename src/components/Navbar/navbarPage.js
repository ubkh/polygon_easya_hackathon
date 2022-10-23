import React from 'react'
import  {Link} from 'react-router-dom';
import "./navbarStyles.css";

function NavigatorPages() {
  return (
    <>

   
<header>
  <div class="hero">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">

        <div class="navbar-brand"><img src="https://www.dropbox.com/s/wwe8870bgswddz1/200x100logo_White_Transparent.png?raw=1" target="blank" alt="logo" height="100"></img></div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
       

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/donate">Donate</Link>
            </li>
           
            <li class="nav-item">
              <Link class="nav-link" to="/vote">Vote</Link>
            </li>

            <div class="social soci-mobile">
              <a href="https://www.facebook.com/ewebdesigns/" target="blank" class="fa fa-facebook-square"></a>
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
              <i class="fa fa-github" aria-hidden="true"></i>
            </div>
          </ul>

        </div>
      </nav>
    </div>
  </div>


</header>



    </>
  );
}

export default NavigatorPages;