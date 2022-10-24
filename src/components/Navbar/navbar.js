import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavStyling';

import { Link } from 'react-router-dom';
import classNames from 'classnames';
import useSticky from './useSticky';

import metamask from '../images/metamask.svg';

import "../App.css";

function Navbar() {
    const { sticky, stickyRef } = useSticky();

    return ( 
        <>
            <PrimaryNav ref={stickyRef} className={classNames({sticky})}>
                <a className="brand" href="home"><img src="https://i.postimg.cc/7PFYPY9V/output-onlinepngtools.png" alt="Logo" target="blank" height="70"></img></a>
                <Hamburger />
                <Menu>
                <MenuLink to="/home">
                    <b>Home</b>
                </MenuLink>
                <MenuLink to="/donate">
                    <b>Donate</b>
                </MenuLink>
                <MenuLink to="/vote">
                    <b>Vote</b>
                </MenuLink>
                <Link to="/" className={classNames("link", "small-font")} ><img className="square" src={metamask } alt="Metamask" width="30" height="30"/> Connect Wallet</Link>
                </Menu>
            </PrimaryNav>
      </>
    );
}

export default Navbar;

