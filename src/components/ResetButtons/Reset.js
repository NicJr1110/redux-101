import { connect } from 'react-redux';
import { handleReset } from '../../data/actions';
import ResetButton from "./ResetButton";


const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleReset()),
    };
};

export default connect(null, mapDispatchToProps)(ResetButton);