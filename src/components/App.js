import React from "react";
import Reset from "./ResetButtons/Reset";
import ResetAll from "./ResetButtons/ResetAll";
import History from "./History/";
import Player1 from "./Score/Player1";
import Player2 from "./Score/Player2";
import Winner from "./Winner/";
import Header from "./Header/Header";


const App = () => (
    <React.Fragment>
        {/* header */}
        <Header>NongNing: The Ultimate Showdown</Header>
        {/* scores */}
        <div className="row mb-4">
            <Player1 
                number="1"
            />
            <Player2
                number="2" 
            />
        </div>
        { /* winner message */}
        <Winner />
        { /* reset button */}
        <Reset  text="Re-Match"/>
        <ResetAll text="Reset All"/>
        { /* History Table */ }
        <History />
    </React.Fragment>
);

export default App;
