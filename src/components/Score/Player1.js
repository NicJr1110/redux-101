import { connect } from 'react-redux';
import { handleAddPointP1 } from '../../data/actions/api';
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

const mapDispatchToProps = (dispatch, id) => {
    return {
        handleClick: () => dispatch(handleAddPointP1()),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);