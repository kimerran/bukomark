import React from "react";


class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.message.text,
      from: props.message.sentByName,
      avatar: `https://avatars2.githubusercontent.com/u/${props.message.sentById}?v=3`
    }
  }

  render() {
    return(

      <div className="item">
        <img className="ui mini circular image" src={this.state.avatar} />
        <div className="content">
          <div className="ui sub header">{this.state.from}</div>
          {this.state.text}
        </div>
      </div>


    )
  }

}
export default ChatMessage;