import React from "react";

import Navigation from "./components/navigation/Navigation";
import MainContent from "./components/main/MainContent";
import PersonalContent from "./components/personal/PersonalContent";


function App() {
    return (
        <div className="App flex justify-between h-screen">
            <Navigation/>
            <MainContent/>
            <PersonalContent/>
        </div>
    );
}

export default App;