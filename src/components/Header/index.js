import { connect } from 'react-redux';
import { handleLanguage } from '../../data/actions';
import Header from "./Header";

const mapStateToProps = ({ german }) => {
    return { 
        german,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleLanguage()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);