import { connect } from "react-redux";
import Loading from "./Loading";
import { handleGetGameById } from "../../data/actions/api";


const mapStateToProps = ({ loaded,id }) =>  {
    return {
        loaded,
        id
    }
};

const mapDispatchToProps = dispatch => ({
    handleLoad: (id) => dispatch(handleGetGameById(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Loading)