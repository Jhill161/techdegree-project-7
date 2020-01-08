import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Nav extends Component {
    render() {
        return(
            <nav className="main-nav">
                <ul>
                <li><NavLink to="/search/aurora">Aurora</NavLink></li>
                <li><NavLink to="/search/northern lights">Northern Lights</NavLink></li>
                <li><NavLink to="/search/snow">Snow</NavLink></li>
                </ul>
            </nav>
        )
    };
};

export default Nav;
