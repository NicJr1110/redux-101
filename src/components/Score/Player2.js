import { connect } from 'react-redux';

import Score from "./Score";

const mapStateToProps = ({ winner,server1,player2 })=>{
    return {
        server: !server1,
        player: player2,
        winner,
    }
};

export default connect(mapStateToProps)(Score);