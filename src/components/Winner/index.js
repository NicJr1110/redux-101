import { connect } from 'react-redux';
import Winner from "./Winner";

const mapStateToProps = ({ winner }) => {
    return {
        winner,
    }
};

export default connect(mapStateToProps)(Winner);