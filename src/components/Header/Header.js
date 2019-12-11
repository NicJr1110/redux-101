import React from 'react';
import Form from 'react-bootstrap/Form';
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';


const Header = ({
    handleClick,
    german,
    }) => (

    <header className="jumbotron mt-4 mb-0">
        <h1>{ !german ? englishLang.title : germanLang.title  }</h1>
        <Form.Check
            onClick={ handleClick }
            type="switch"
            id="custom-switch"
            label={ !german ? englishLang.switch : germanLang.switch}
        />
    </header>
)

export default Header;