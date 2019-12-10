import React from 'react';

const Score = ({
    server,
    number,
    player,
    endGame,
    handleClick,
}) => (
    <div className="col-md-6 mt-4">
        <div className={ "card text-center" + (
            server ? " bg-dark text-white" : "") }>
            <h5 className="card-header">Player { number }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ player }</p>
            </div>
            <div className="card-footer">
                <button disabled={ endGame ? true : null } className="form-control btn btn-success" onClick={ handleClick }>+</button>
            </div>
        </div>
    </div>
)

export default Score;