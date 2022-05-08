import React from "react";
import logo from '../img/shootyTitleImage.png';
import {Box,Button} from '@mui/material';
import { NavLink } from "react-router-dom";
import { FormatAlignJustify } from "@mui/icons-material";
import DownloadIcon from '@mui/icons-material/Download';

export default function Navbar() {
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center"
        }}>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="Shooty2a"></img>
                </NavLink>
<<<<<<< HEAD
=======
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
              
                <a href="https://dl.dropboxusercontent.com/s/au76v39blsvsv5c/Shooty2a-v0.1.32-setup.exe?dl=0">
                
                <button>DOWNLOAD SHOOTY2A Version 0.1.32</button>
                </a>
>>>>>>> 70124ddeefa05a67eebb15f2f6900b78caeb91f3

                <Box sx={{
            display:"flex",
            justifyContent:"center"
        }}>
                <a href="https://dl.dropboxusercontent.com/s/au76v39blsvsv5c/Shooty2a-v0.1.32-setup.exe?dl=0">
                
                <Button variant="contained" color="secondary" startIcon={<DownloadIcon/>}>DOWNLOAD SHOOTY2A Version 0.1.32</Button>
                </a>
              </Box>
              <Box sx={{display:"flex", justifyContent:"center",}}>From the creative mind of Tzrrkah!!!</Box>
            </nav>


        </Box>
    );
}
