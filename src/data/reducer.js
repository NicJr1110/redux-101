import initial from "./initial";


const p1 = state => ({ ...state, player1: state.player1 + 1});

const p2 = state => ({ ...state, player2: state.player2 + 1});

const setServer = (state, action) => ({ ...state, server1: action.server1 })


const playerWin = (state, action) => ({...state, winner: action.winner} )

const history = state => {
    if ( state.winner ){
        return( {...state, 
                history: [...state.history, 
                {
                    "player_1": {
                    "score": state.player1,
                    "won": state.winner === 1
                    },
                    "player_2": {
                    "score": state.player2,
                    "won": state.winner === 2
                    }
                } 
                 ]
            }
        )
    } else {
        return{...state}
    }
};

const setLanguage = state => {
    return {...state, german: !state.german}
};

const startGame = (state, action) => {
    return {...initial,
    gameStarted: true,
    p1Name: action.p1Name,
    p2Name: action.p2Name,
    winningScore: action.winningScore,
    alternateEvery: action.alternateEvery,
    german: state.german,
    id: action.id,
    }
};

const reset = state => {
    return {...initial,
        history: state.history,
        gameStarted: true,
        p1Name: state.p1Name,
        p2Name: state.p2Name,
        winningScore: state.winningScore,
        alternateEvery: state.alternateEvery,
        german: state.german,
        loaded: state.loaded,
    };
};

const loadedGame = state => {
    return {...state,loaded: true, }
};


const reducer = (state, action) => {
    switch (action.type){
        case "addPointP1": return history(playerWin(setServer(p1(state),action),action));
        case "addPointP2": return history(playerWin(setServer(p2(state),action),action));
        case "reset": return reset(state);
        case "resetTotal": return {...initial,
            german: state.german,
        };
        case "startGame" : return startGame(state, action);
        case "loaded" : return loadedGame(state);
        case "changeLanguage": return setLanguage(state);
        default: return state;
    }
}

export default reducer;