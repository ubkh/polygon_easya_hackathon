import React from 'react';
import  {Link} from 'react-router-dom';
import "./navbarStyles.css";

function Navigator() {
  return (
    <>

<header>
  <div className="hero">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">

        <a className="navbar-brand" href="#"><img src="https://www.dropbox.com/s/wwe8870bgswddz1/200x100logo_White_Transparent.png?raw=1" target="blank" alt="logo" height="100"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">Donate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vote">Vote</Link>
            </li>
            <div className="social soci-mobile">
              <a href="https://www.facebook.com/ewebdesigns/" target="blank" className="fa fa-facebook-square"></a>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              <i className="fa fa-github" aria-hidden="true"></i>
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

export default Navigator;