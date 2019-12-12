import { connect } from 'react-redux';
import { handleAddPointP2 } from '../../data/actions/api';
import Score from "./Score";

const mapStateToProps = ({ winner,server1,player2,p2Name,german })=>{
    return {
        server: !server1,
        player: player2,
        winner,
        name: p2Name,
        german,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleAddPointP2()),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Score);