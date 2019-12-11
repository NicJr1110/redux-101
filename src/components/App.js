import React from "react";
import Header from "./Header/";
import Settings from "./Settings/";
import Game from "./Game/";

const App = () => (
    <React.Fragment>
        {/* header */}
        <Header />
        { /* Setting */ }
        <Settings />
        {/* Game Board */}
        <Game />
    </React.Fragment>
);

export default App;
