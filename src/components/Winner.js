import React from 'react';

const Winner = ({
    winner,
    number
}) => (
    winner ? <h2 className="alert alert-success">Player { number } wins!</h2> : null 
)

export default Winner;