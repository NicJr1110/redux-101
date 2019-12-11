import { connect } from 'react-redux';
import { handleClickP2 } from '../../data/actions';
import Score from "./Score";

const mapStateToProps = ({ winner,server1,player2,p2Name })=>{
    return {
        server: !server1,
        player: player2,
        winner,
        name: p2Name,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleClickP2()),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Score);