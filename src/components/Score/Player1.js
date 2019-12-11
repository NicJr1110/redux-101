import { connect } from 'react-redux';
import { handleClickP1 } from '../../data/actions';
import Score from "./Score";

const mapStateToProps = ({ winner,server1,player1, p1Name, german }) => {
    return {
        server: server1,
        player: player1,
        winner,
        name: p1Name,
        german,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleClickP1()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);