import React from "react";
import Score from "./Score";

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
            {/* <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (
                  server1 ? " bg-dark text-white" : "") }>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    <div className="card-footer">
                        <button disabled={ endGame ? true : null } className="form-control btn btn-success" onClick={ handleClickP1 }>+</button>
                    </div>
                </div>
            </div> */}

            <Score server={ server1 } number="2"  player={ player2 } endGame={ endGame } handleClick={ handleClickP2 } />
            {/* <div className="col-md-6 mt-4">
                <div className={ "card text-center" + (server1 ? "" : " bg-dark text-white") }>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    <div className="card-footer">
                        <button disabled={ endGame ? true : null } className="form-control btn btn-success" 
                        
                        onClick={ handleClickP2 } >+</button>
                    </div>
                </div>
            </div> */}
        </div>

        { /* winner message */}
        { winner1 ? <h2 className="alert alert-success">Player 1 wins!</h2> : null }
        { winner2 ? <h2 className="alert alert-success">Player 2 wins!</h2> : null }
        

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>
    </React.Fragment>
);

export default App;
