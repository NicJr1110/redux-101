import React from 'react';
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';

const Score = ({
    server,
    name,
    player,
    winner,
    handleClick,
    german
}) => (
    <div className="col-md-6 mt-4">
        <div className={ "card text-center" + (
            server ? " bg-dark text-white" : "") }>
            <h5 className="card-header">{ name }{ server ? "" : !german ? ": "+englishLang.serving : ": "+germanLang.serving }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ player }</p>
            </div>
            <div className="card-footer">
                <button disabled={ winner ? true : null } className="form-control btn btn-success" onClick={ handleClick }>+</button>
            </div>
        </div>
    </div>
)

export default Score;