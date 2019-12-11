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

export const handleSubmitStart = () => {
    return {
        type: "startGame",
    }
}