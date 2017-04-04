import React                from "react";
import {bindActionCreators} from "redux";
import {connect}            from "react-redux";
import {SayHello}           from "../actions/main.actions";

import ChatBox from '../components/chat_box';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app
    this.state = {
      messages: []
    }


    this.app.service('messages').find({
        query: {
          $sort: { createdAt: -1 },
          $limit: 12
        }}) 
      .then((page) => {
        this.messages = page.data;
        console.log('>>>>')
        this.setState({messages: page.data})
        console.log(this.messages);
      });
  }

  render() {
    return (
      <div>
        <ChatBox app={this.app} messages={this.state.messages} />
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