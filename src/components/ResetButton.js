import React from 'react';

const ResetButton = ({
    handleClick
}) => (
    <button className="btn btn-danger" onClick={ handleClick }>Reset</button>
)

export default ResetButton;