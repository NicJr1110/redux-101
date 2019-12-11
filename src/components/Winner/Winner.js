import React from 'react';
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';

const Winner = ({
    winner,
    german,
}) => (
    winner > 0 ? <h2 className="alert alert-success">{ !german ? englishLang.player1_wins : germanLang.player1_wins }</h2> : null
)

export default Winner;