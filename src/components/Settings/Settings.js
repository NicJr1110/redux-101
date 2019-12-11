import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import germanLang from '../../languages/german';
import englishLang from '../../languages/english';


class Settings extends Component{
    constructor(props){
        super(props);

        this.state={
            p1Name: props.p1Name,
            p2Name: props.p2Name,
            winningScore: props.winningScore,
            alternateEvery: props.alternateEvery,
        
            
        }
        
        this.handleChangeP1Name = this.handleChangeP1Name.bind(this);
        this.handleChangeP2Name = this.handleChangeP2Name.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handleAlternateEvery = this.handleAlternateEvery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeP1Name(e) {
        this.setState({
            p1Name: e.currentTarget.value,
        });
    }

    handleChangeP2Name(e) {
        this.setState({
            p2Name: e.currentTarget.value,
        });
    }

    handleWinningScore(e) {
        this.setState({ 
            winningScore: +e.currentTarget.value
        });
    }

    handleAlternateEvery(e) {
        this.setState({
            alternateEvery: +e.currentTarget.value
        });
    }

    handleSubmit(e){
        e.preventDefault();

        let { handleSubmitStart } = this.props;
        let { p1Name, p2Name, winningScore, alternateEvery } = this.state;
        
        handleSubmitStart(p1Name, p2Name, +winningScore,+alternateEvery);
        this.setState({
            p1Name: "",
            p2Name: "",
            winningScore: 21,
            alternateEvery:5,
        })
        
    }


    render(){
        let { p1Name, p2Name, winningScore, alternateEvery } = this.state;
        let { gameStarted,german } = this.props;
        return(
            <>
                { gameStarted ? null :   
                <div className ="container">
                    <h1> { !german ? englishLang.setupGame : germanLang.setupGame }</h1>
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group controlId="formGroupPlayer2">
                            <Form.Label>{ !german ? englishLang.player1_name : germanLang.player1_name }</Form.Label>
                            <Form.Control 
                                onChange = { this.handleChangeP1Name }
                                type="text" 
                                placeholder={ !german ? englishLang.player1_placeholder : germanLang.player1_placeholder }
                                value={ p1Name }
                                required 
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPlayer2">
                            <Form.Label>{ !german ? englishLang.player2_name : germanLang.player2_name }</Form.Label>
                            <Form.Control 
                                onChange={ this.handleChangeP2Name }
                                type="text" 
                                placeholder={ !german ? englishLang.player2_placeholder : germanLang.player2_placeholder }
                                value = { p2Name } 
                                required 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{ !german ? englishLang.winningScore : germanLang.winningScore }</Form.Label>
                            <Form.Control 
                                onChange={ this.handleWinningScore }
                                type="integer" 
                                min="1"
                                value={ winningScore }
                                
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{ !german ? englishLang.altEvery : germanLang.altEvery }</Form.Label>
                            <Form.Control 
                                as="select"
                                onChange={ this.handleAlternateEvery }
                                defaultValue = { alternateEvery }
                            >
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            { !german ? englishLang.start : germanLang.start }
                        </Button>
                    </Form>
                </div>
                }   
            </>
        )
    }
};

export default Settings;