import React from 'react';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: ''
    }
    this.onCreate = props.onCreate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({
      newMessage: ev.target.value
    })
    ev.preventDefault();
  }

  render() {
    return (
      <div className="ui action input aligned right" style={{display: 'flex'}}>
        <input
          onChange={this.onChange}
          style={{minWidth: '200px'}}
          type="text"
          placeholder="Enter your message..."
        >
        </input>
        <button onClick={() => {this.onCreate(this.state.newMessage)}} className="ui button">Send</button>
      </div>
    );
  }

}

export default MessageBox;