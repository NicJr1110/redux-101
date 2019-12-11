import { connect } from 'react-redux';
import Winner from "./Winner";

const mapStateToProps = ({ winner,german }) => {
    return {
        winner,
        german,
    }
};

export default connect(mapStateToProps)(Winner);