import initial from "./initial";


const p1 = state => ({ ...state, player1: state.player1 + 1});

const p2 = state => ({ ...state, player2: state.player2 + 1});

const setServer = state => (
    state.player1 + state.player2 < ((state.winningScore - 1)*2) ? 
    {...state, server1: (Math.floor(((state.player1+state.player2)/state.alternateEvery)%2))} : {...state, server1: (Math.floor(((state.player1+state.player2)/2)%2))} 
)

const scoreDiff = state => ( Math.abs(state.player1 - state.player2))

const playerWin = state => {
    if (state.player1 >= state.winningScore && (state.player1 > state.player2 && scoreDiff(state) >=2)){
        return {...state, winner: 1 }
    } else if (state.player2 >= state.winningScore && (state.player2 > state.player1 && scoreDiff(state) >=2)){
        return {...state, winner: 2}
    } else {
        return {...state}
    }
}

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
}



const reducer = (state, action) => {
    switch (action.type){
        case "addPointP1": return history(playerWin(setServer(p1(state))));
        case "addPointP2": return history(playerWin(setServer(p2(state))));
        case "reset": return {...initial,
            history: state.history,
            gameStarted: true,
            p1Name: state.p1Name,
            p2Name: state.p2Name,
            winningScore: state.winningScore,
            alternateEvery: state.alternateEvery,
        };
        case "resetTotal": return {...initial};
        case "startGame" : return {...initial,
            gameStarted: true,
            p1Name: action.p1Name,
            p2Name: action.p2Name,
            winningScore: action.winningScore,
            alternateEvery: action.alternateEvery,
        };
        default: return state;
    }
}

export default reducer;