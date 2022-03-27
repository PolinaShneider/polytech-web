import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Auth} from "./pages/Auth";
import {Register} from "./pages/Register";
import {Shop} from "./pages/Shop";
import {Profile} from "./pages/Profile";
import {Transfers} from "./pages/Transfers";
import {Home} from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/transfer" element={<Transfers/>}/>
            </Routes>
        </div>
    );
}

export default App;
