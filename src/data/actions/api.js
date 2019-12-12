import axios from "../../Axios";
import { handleSubmitStart, loaded, handleP1, handleP2 } from "./actions";


export const handleAddPointP1 = () => (dispatch, getState) => {
    const { id } = getState();
    axios.patch("/games/"+id+"/score",{
        player: 1,
    }).then(({ data }) => {
        dispatch(handleP1(data));
        }
    )
}

export const handleAddPointP2 = () => (dispatch, getState) => {
    const { id } = getState();
    axios.patch("/games/"+id+"/score",{
        player: 2,
    }).then(({ data }) => {
        dispatch(handleP2(data));
        }
    )
}

export const handleGetGameById = (id) => dispatch => {
    axios.get("/games/"+ id).then(() => {
        dispatch(loaded());
        }
    )
}

export const handleCreateGame = (p1Name,p2Name,winningScore,alternateEvery,id) => dispatch => {
    axios.post("/games", {
            player_1: p1Name,
            player_2: p2Name,
            winning_score: winningScore,
            change_serve: alternateEvery,
            id: id
    }).then(({ data }) => {
            dispatch(handleSubmitStart(data));
        }
    )
}