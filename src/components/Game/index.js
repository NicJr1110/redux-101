import { connect } from 'react-redux';
import Game from "./Game";


const mapStateToProps = ({ gameStarted,german }) => {
    return {
        gameStarted,
        german
        
    }
};


export default connect(mapStateToProps)(Game);