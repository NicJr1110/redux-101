import React from 'react';
import Reset from "../ResetButtons/Reset";
import ResetAll from "../ResetButtons/ResetAll";
import History from "../History";
import Player1 from "../Score/Player1";
import Player2 from "../Score/Player2";
import Winner from "../Winner";
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';

const Game = ({
    gameStarted,
    german
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
                <Reset  text={ !german ? englishLang.rematch : germanLang.rematch }/>
                <ResetAll text={ !german ? englishLang.reset : germanLang.reset }/>
                { /* History Table */ }
                <History />
        </div>
        }
    </>
)

export default Game;