import { connect } from 'react-redux';
import Settings from "./Settings";
import { handleSubmitStart } from "../../data/actions"

const mapStateToProps = ({ p1Name, p2Name,winningScore,alternateEvery,gameStarted }) => {
    return {
        p1Name,
        p2Name,
        winningScore,
        alternateEvery,
        gameStarted,
        
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmitStart: (p1Name,p2Name,winningScore,alternateEvery) => dispatch(handleSubmitStart(p1Name,p2Name,winningScore,alternateEvery)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Settings);