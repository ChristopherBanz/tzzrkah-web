import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList.tsx";
import Footer from "./components/footer";
import TestComponent from "./components/testComponent.tsx";
import { ThemeProvider, styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import {CssBaseline} from '@mui/material';
import PrimaryComponent from "./components/primaryComponent";
import custTheme from './theme';

const App = () => {
    return (
        <ThemeProvider theme={custTheme}>
          <CssBaseline/>
            <Navbar/>
              <PrimaryComponent/>
            <Footer/>
        </ThemeProvider>
    );
};

export default App;