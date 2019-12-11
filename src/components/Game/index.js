import { connect } from 'react-redux';
import Game from "./Game";


const mapStateToProps = ({ gameStarted }) => {
    return {
        gameStarted,
        
    }
};


export default connect(mapStateToProps)(Game);