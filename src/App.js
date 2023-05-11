import React from 'react';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "vm";
import Home from './components/home/homepage';
import Listing from "./components/listing/listing";



function App() {
    const [user, setUser] = useState({ username: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <Home ></Home>
            {/* <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <Routes>
                        <Route path="home" element= {Home}/>
                        <Route path="listing" element={Listing} />
                    </Routes>
                    
                </userContext.Provider>
            </BrowserRouter> */}
        </>
    );
}

export default App;
