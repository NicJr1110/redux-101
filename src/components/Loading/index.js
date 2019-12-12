import { connect } from "react-redux";
import Loading from "./Loading";

const mapStateToProps = ({ loaded }) =>  {
    return {
        loaded,
    }
};

const mapDispatchToProps = dispatch => ({
    handleLoad: () => console.log("loaded")
})

export default connect(mapStateToProps,mapDispatchToProps)(Loading)