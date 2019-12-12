export const handleP1 = ({ data }) => {
    return {
        type: "addPointP1",
        server1: data.player_1.serving ? 0 : 1,
        winner: data.player_1.won ? 1 : 0,
    };
};

export const handleP2 = ({ data }) => {
    return {
        type: "addPointP2",
        server1: data.player_1.serving ? 0 : 1,
        winner: data.player_2.won ? 2 : 0,
    };
};

export const handleReset = () => {
    return {
        type : "reset",
    };
};

export const handleResetTotal = () => {
    return {
        type: "resetTotal",
    };
};

export const handleSubmitStart = ({ data }) => {
    return {
        type: "startGame",
        p1Name: data.player_1.name,
        p2Name: data.player_2.name,
        winningScore: data.winning_score,
        alternateEvery: data.change_serve,
        id: data.id
    }
}

export const handleLanguage = () => {
    return {
        type: "changeLanguage",
    }
}

export const loaded = () => {
    return {
        type: "loaded",
    }
}