import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { usePromiseTracker} from "react-promise-tracker";
import {ThreeCircles} from 'react-loader-spinner';

const LoadingIndicator = props => {
    const { promiseInProgress} = usePromiseTracker();

    return (
        promiseInProgress &&
        <div style={{width: "100%", height: "1--", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <ThreeCircles color="yellow"/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <LoadingIndicator/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);