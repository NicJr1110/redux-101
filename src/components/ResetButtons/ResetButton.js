import React from 'react';

const ResetButton = ({
    handleClick,
    text
}) => (
    <button className="btn btn-danger" onClick={ handleClick }>{ text }</button>
)

export default ResetButton;