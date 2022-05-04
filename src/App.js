import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Footer from "./components/footer";
import './style.css';

const App = () => {
    return (
        <div style={{marginLeft:"25%", marginRight:"25%"}}>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;