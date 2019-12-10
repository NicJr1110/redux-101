import React from "react";
import ResetButton from "./ResetButton";
import History from "./History/index";
import Player1 from "./Score/Player1";
import Player2 from "./Score/Player2";
import Winner from "./Winner/index";


const App = ({
    handleClickP1,
    handleClickP2,
    handleReset,
    handleResetTotal,
    

}) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

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
        <ResetButton handleClick={ handleReset } text="Re-Match"/>
        <History />
        <ResetButton handleClick={ handleResetTotal } text="Reset All"/>
    </React.Fragment>
);

export default App;
