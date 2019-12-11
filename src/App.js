import React from "react";
import ResetButton from "./components/ResetButton";
import History from "./components/History/";
import Player1 from "./components/Score/Player1";
import Player2 from "./components/Score/Player2";
import Winner from "./components/Winner/";
import Header from "./components/Header/Header";


const App = ({
    handleClickP1,
    handleClickP2,
    handleReset,
    handleResetTotal,
    

}) => (
    <React.Fragment>
        {/* header */}
        <Header>NingNortong: The Ultimate Showdown</Header>

        {/* scores */}
        <div className="row mb-4">
            <Player1 
                number="1" 
                handleClick={ handleClickP1 }
            />
            <Player2
                number="2" 
                handleClick={ handleClickP2 } 
            />
        </div>
        { /* winner message */}
        
        <Winner />

        { /* reset button */}
        <div className="well">
            <ResetButton handleClick={ handleReset } text="Re-Match"/>
            <ResetButton handleClick={ handleResetTotal } text="Reset All"/>
        </div>
        <History />
        
    </React.Fragment>
);

export default App;
