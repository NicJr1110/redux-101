export const handleClickP1 = () => {
    return {
        type: "addPointP1",
    };
};

export const handleClickP2 = () => {
    return {
        type: "addPointP2",
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

export const handleSubmitStart = (p1Name,p2Name,winningScore, alternateEvery) => {
    return {
        type: "startGame",
        p1Name: p1Name,
        p2Name: p2Name,
        winningScore: winningScore,
        alternateEvery: alternateEvery,
    }
}