import { connect } from 'react-redux';
import Settings from "./Settings";
import { handleSubmitStart } from "../../data/actions"

const mapStateToProps = ({ p1Name, p2Name,winningScore,alternateEvery,gameStarted,german }) => {
    return {
        p1Name,
        p2Name,
        winningScore,
        alternateEvery,
        gameStarted,
        german,
        
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmitStart: (p1Name,p2Name,winningScore,alternateEvery) => dispatch(handleSubmitStart(p1Name,p2Name,winningScore,alternateEvery)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Settings);