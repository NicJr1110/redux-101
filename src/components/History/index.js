import { connect } from 'react-redux';
import History from "./History";

const mapStateToProps = ({ history, german }) => {
    return {
        games: history,
        german
    }
};

export default connect(mapStateToProps)(History);