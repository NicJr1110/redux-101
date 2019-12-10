 import React from 'react';
 import ReactDOM from 'react-dom';
// import './index.css';
 import App from './components/App';
// import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
    server1: 0,
    winner1: false,
    winner2: false,
    history: [],
    
};

const p1 = state => ({ ...state, player1: state.player1 + 1});

const p2 = state => ({ ...state, player2: state.player2 + 1});

const setServer = state => ({...state, server1: (Math.floor(((state.player1+state.player2)/5)%2))});

const scoreDiff = state => ( Math.abs(state.player1 - state.player2))

const player1Win = state => {
    if (state.player1 >= 21 && (state.player1 > state.player2 && scoreDiff(state) >=2)){
        return {...state, winner1: true, history: [...state.history, 
            {
                "player_1": {
                "score": state.player1,
                "won": true
                },
                "player_2": {
                "score": state.player2,
                "won": false
                }
            } 
        ]}
    } else {
        return{...state, winner1: false}
    }
}

const player2Win = state => {
    if (state.player2 >= 21 && (state.player2 > state.player1 && scoreDiff(state) >=2)){
        return {...state, winner2: true, history: [...state.history, 
            {
                "player_1": {
                "score": state.player1,
                "won": false
                },
                "player_2": {
                "score": state.player2,
                "won": true
                }
            } 
        ]}
    }else {
        return{...state, winner2: false}
    }
}

const reducer = (state, action) => {
    switch (action.type){
        case "addPointP1": return player1Win(player2Win(setServer(p1(state))));
        case "addPointP2": return player1Win(player2Win(setServer(p2(state))));
        case "reset": return {...initial, history: state.history};
        default: return state;
    }
}

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

);

const render = () => {
    let state = store.getState();

    ReactDOM.render(
        <App 
            player1={ state.player1 } 
            player2={ state.player2 }
            handleClickP1 = { () => store.dispatch({ type: "addPointP1" }) }
            handleClickP2 = { () => store.dispatch({ type: "addPointP2" }) }
            handleReset = { () => store.dispatch({ type: "reset" }) }
            server1 = { state.server1 }
            winner1 ={ state.winner1 }
            winner2 ={ state.winner2 }
            endGame ={ state.winner1 || state.winner2 }
            history ={ state.history }
            
            
        />,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();
