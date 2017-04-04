import React                from "react";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {SayHello}           from "../actions/main.actions";

class MainApp extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.mainReducer.message}</h1>
                <button onClick={this.props.SayHello}>Click Me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mainReducer: state.mainReducer
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        SayHello: SayHello
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainApp);