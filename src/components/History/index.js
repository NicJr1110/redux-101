import { connect } from 'react-redux';
import History from "./History";

const mapStateToProps = ({ history }) => {
    return {
        games: history,
    }
};

export default connect(mapStateToProps)(History);