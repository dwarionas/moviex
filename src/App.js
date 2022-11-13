import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Navigation from "./components/navigation/Navigation";
import MainContent from "./components/main/MainContent";
import PersonalContent from "./components/personal/PersonalContent";


function App() {
    return (
        <div className="App flex justify-between h-screen">
            <BrowserRouter>
                <Navigation/>
                <MainContent/>
                <PersonalContent/>
            </BrowserRouter>
        </div>
    );
}

export default App;