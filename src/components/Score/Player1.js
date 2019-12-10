import { connect } from 'react-redux';

import Score from "./Score";

const mapStateToProps = ({ winner,server1,player1 }) =>{
    return {
        server: server1,
        player: player1,
        winner,
    }
};

export default connect(mapStateToProps)(Score);