import React from "react";
import Score from "./Score";
import Winner from "./Winner";
import ResetButton from "./ResetButton";
import History from "./History";

const App = ({
    server1,
    player1,
    player2,
    endGame,
    handleClickP1,
    handleClickP2,
    winner1,
    winner2,
    handleReset,
    history,

}) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <Score server={ !server1 } number="1"  player={ player1 } endGame={ endGame } handleClick={ handleClickP1 } />
            <Score server={ server1 } number="2"  player={ player2 } endGame={ endGame } handleClick={ handleClickP2 } />
        </div>
        { /* winner message */}
        <Winner winner={ winner1 } number="1"/>
        <Winner winner={ winner2 } number="2"/>

        { /* reset button */}
        <ResetButton handleClick={ handleReset }/>
        <History games={ history } />
    </React.Fragment>
);

export default App;
