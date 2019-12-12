import { connect } from 'react-redux';
import Settings from "./Settings";
import { handleCreateGame } from "../../data/actions/api"

const mapStateToProps = ({ p1Name, p2Name,winningScore,alternateEvery,gameStarted,german, id }) => {
    return {
        p1Name,
        p2Name,
        winningScore,
        alternateEvery,
        gameStarted,
        german,
        id,
        
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleCreateGame: (p1Name,p2Name,winningScore,alternateEvery) => dispatch(handleCreateGame(p1Name,p2Name,winningScore,alternateEvery)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Settings);