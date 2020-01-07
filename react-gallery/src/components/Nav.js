import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Nav extends Component {
    render() {
        return(
            <nav className="main-nav">
                <ul>
                <li><NavLink to="/aurora">Aurora</NavLink></li>
                <li><NavLink to='#' >Dogs</NavLink></li>
                <li><NavLink to='#' >Computers</NavLink></li>
                </ul>
            </nav>
        )
    };
};

export default Nav;
