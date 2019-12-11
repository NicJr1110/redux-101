import { connect } from 'react-redux';
import Settings from "./Settings";

const mapStateToProps = ({ p1Name, p2Name,winningScore,alternateEvery }) => {
    return {
        p1Name,
        p2Name,
        winningScore,
        alternateEvery,
        
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         handleClick: () => dispatch(handleClickP1()),
//     };
// };

export default connect(mapStateToProps)(Settings);