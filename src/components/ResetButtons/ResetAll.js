import { connect } from 'react-redux';
import { handleResetTotal } from '../../data/actions';
import ResetButton from "./ResetButton";


const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleResetTotal()),
    };
};

export default connect(null, mapDispatchToProps)(ResetButton);