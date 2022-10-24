import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';

import "./App.css";
import Chart from "./Chart.js";
import Category from "./Categories.js"


import NavigatorPages from "./Navbar/navbarPage.js";

const Layout = () => {
    return ( 
        <>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/donate">Donate</Link>
                </li>
                <li>
                    <Link to="/vote">Vote</Link>
                </li>
                </ul>
            </nav>

        <Outlet />
      </>
    );
}

export default Layout;

