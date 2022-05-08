import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider,} from "@mui/material/styles";
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