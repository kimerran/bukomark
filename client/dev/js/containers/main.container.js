import React                from "react";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {SayHello}           from "../actions/main.actions";

import ChatBox from '../components/chat_box';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app
    this.app.service('messages').find()
      .then(page => console.log(page.data))
  }

  render() {
    return (
      <div>
        <ChatBox />
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