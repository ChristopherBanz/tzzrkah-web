import React from "react";
import { Route, Routes } from "react-router-dom";
import RecordList from "../components/recordList.tsx";
import TestComponent from "../components/testComponent.tsx";
import {Box} from "@mui/material";
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



export default function PrimaryComponent(){
    return(
        
        <Box sx={{
            display:"flex",
            justifyContent:"center"
        }}>
            <LoadingIndicator/>
        <Routes>
            <Route exact path="/" element={<RecordList />} />
            <Route exact path="/testcomp" element = {<TestComponent/>}/>
        </Routes>
        </Box>
        
        )
}
