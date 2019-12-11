import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

    }

    handleChangeP1Name(e) {
        this.setState({
            player1: e.currentTarget.value,
        });
    }

    handleChangeP2Name(e) {
        this.setState({
            player2: e.currentTarget.value,
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


    render(){
        let { p1Name, p2Name, winningScore, alternateEvery } = this.state;
        return(
            <div className ="container">
                <h1> Setup Game </h1>
                <Form onSubmit="">
                    <Form.Group controlId="formGroupPlayer2">
                        <Form.Label>Player 1 Name</Form.Label>
                        <Form.Control 
                            onChange = { this.handleChangeP1Name }
                            type="text" 
                            //placeholder="Enter Player 1 name" 
                            value={ p1Name }
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPlayer2">
                        <Form.Label>Player 2 Name</Form.Label>
                        <Form.Control 
                            onChange={ this.handleChangeP2Name }
                            type="text" 
                            //placeholder="Enter Player 2 name"
                            value = { p2Name } 
                            required 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Winning Score</Form.Label>
                        <Form.Control 
                            onChange={ this.handleWinningScore }
                            type="integer" 
                            value={ winningScore } 
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Alternate Every</Form.Label>
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
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
};

export default Settings;