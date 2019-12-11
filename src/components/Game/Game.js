import React from 'react';
import Reset from "../ResetButtons/Reset";
import ResetAll from "../ResetButtons/ResetAll";
import History from "../History";
import Player1 from "../Score/Player1";
import Player2 from "../Score/Player2";
import Winner from "../Winner";

const Game = ({
    gameStarted,
}) => (
    <>  
        { !gameStarted ? "" : 
        <div className="container">
                {/* scores */}
                <div className="row mb-4">
                    <Player1 
                    />
                    <Player2 
                    />
                </div>
                { /* winner message */}
                <Winner />
                { /* reset button */}
                <Reset  text="Re-Match"/>
                <ResetAll text="Restart"/>
                { /* History Table */ }
                <History />
        </div>
        }
    </>
)

export default Game;