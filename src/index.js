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

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("root")
);

