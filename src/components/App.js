import React from "react";
import Score from "./Score";
import Winner from "./Winner";

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
 

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;
