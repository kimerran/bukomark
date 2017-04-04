import React from "react";

import MessageBox from './message_box';
import ChatMessage from './chat_message';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;

    this.state = {
      messages: []
    }

    this.app.service('messages').on('created', (msg) => {
      const messages = this.state.messages;
      messages.push(msg);
      this.setState({messages: messages.reverse().slice(0,12)});
    });

    this.createMessage = this.createMessage.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({messages: props.messages})
  }

  createMessage(newMsg) {
    const message = {
      text: newMsg
    };

    this.app.service('messages').create(message)
      .then((msg) => console.log('created'))
      .catch(err => console.log(err))
  }

  renderList() {
    console.log('renderList', this.state)
    return (
      this.state.messages.reverse().map(msg => {
        return (
          <ChatMessage key={msg.id} message={msg} />
        )
      })
    )
  }

  render() {
    return (
      <div className="ui segments" style={styles.container}>
        <div 
          className="ui segment list" 
          style={styles.list}
        >
          {this.renderList()}
        </div>

        <div className="ui segment">
          <MessageBox onCreate={this.createMessage} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    overflow: 'hidden',
  },
  list: {
    minHeight: '500px',

    maxHeight: '500px',
    overflowY: 'scroll'
  }
}

export default ChatBox;