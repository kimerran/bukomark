import React from "react";

import MessageBox from './message_box';
import ChatMessage from './chat_message';

class ChatBox extends React.Component {


  render() {
    return (
      <div className="ui segments" style={styles.container}>
        <div 
          className="ui segment list" 
          style={styles.list}
        >



        </div>

        <div className="ui segment">
          <MessageBox />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    overflow: 'hidden',
    minHeight: '500px',
  },
  list: {
    maxHeight: '500px',
    overflowY: 'scroll'
  }
}

export default ChatBox;