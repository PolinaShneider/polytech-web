import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Auth} from "./pages/Auth";
import {Tasks} from "./pages/Tasks";
import {Transfers} from "./pages/Transfers";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/transfer" element={<Transfers/>}/>
            </Routes>
        </div>
    );
}

export default App;
