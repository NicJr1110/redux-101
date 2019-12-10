import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import initial from "./data/initial";
import { Provider } from "react-redux";
import reducer from "./data/reducer";


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initial,
    composeEnhancers(persistState())
);


    let state = store.getState();

    ReactDOM.render(
        <Provider store={ store }>
            <App 
                player1={ state.player1 } 
                player2={ state.player2 }
                handleClickP1 = { () => store.dispatch({ type: "addPointP1" }) }
                handleClickP2 = { () => store.dispatch({ type: "addPointP2" }) }
                handleReset = { () => store.dispatch({ type: "reset" }) }
                handleResetTotal = { () => store.dispatch({ type: "resetTotal"}) }
                server1 = { state.server1 }
                winner ={ state.winner }
                history ={ state.history }
                
                
            />
        </Provider>,
        document.getElementById("root")
    );


// store.subscribe(render);
// render();
