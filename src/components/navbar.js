import React from "react";
import logo from '../img/shootyTitleImage.png';

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Shooty2a"></img>
                    <p>From the creative mind of Tzrrkah!!!</p>
                </NavLink>
                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
              
                <a href="https://dl.dropboxusercontent.com/s/ewgugd6beau53eh/Shooty2aSetup013.exe?dl=0">
                
                <button>DOWNLOAD SHOOTY2A Version 0.1.3</button>
                </a>

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create">
                                Submit your score
                            </NavLink>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </div>
    );
}