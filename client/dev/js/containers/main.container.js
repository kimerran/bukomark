import React from 'react';
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
        this.setState({messages: page.data});
      })
      .catch((err) => {
        console.log(err);
        this.app.logout();
        window.location = '/';
      });

      this.logout = this.logout.bind(this);
  }

  logout() {
    const user = this.app.get('user');
    this.app.service('users')
      .remove(user.id)
      .then(() => {
        this.app.logout();
        window.location = '/';
      });
  }

  render() {
    const user = this.app.get('user');
    return (
      <div>
        <ChatBox app={this.app} messages={this.state.messages} />
        <button onClick={this.logout}>log out ({user.github.login})</button>
      </div>
    );
  }
}

export default MainApp;
