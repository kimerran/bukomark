import React from 'react';

class MessageBox extends React.Component {

  render() {
    return (
      <div className="ui action input aligned right" style={{display: 'flex'}}>
        <input style={{minWidth: '200px'}} type="text" placeholder="Enter your message..."></input>
        <button className="ui button">Send</button>
      </div>
    );
  }

}

export default MessageBox;