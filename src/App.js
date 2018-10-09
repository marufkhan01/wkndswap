import React, { Component } from 'react';
import Main from './components/Main.js';
import LogIn from './components/log/LogIn';
import MessageList from './components/MessageList.js';
import MessageFrom from './components/MessageForm';
import firebase from './db/firebase.js';

import './App.css';

class App extends Component {

  state={
    currentUser:'',
    messagesList:[]
  }

    componentDidMount(){
      firebase.auth().onAuthStateChanged(this.onUser);

          // new value add database
          firebase.database()
            .ref('messages').on('child_added', (snapshot) => {
              const newMessage = {
                value: snapshot.val(),
                key: snapshot.key
              }
            this.setState({ messagesList: [...this.state.messagesList, newMessage] })
          })

        }

        //function sets the currentUser state , who is logged in
            onUser = (user) => {
              if (user && user.displayName) {
                const newUser = {
                  email: user.email,
                  userName: user.displayName,
                }
                this.setState({ currentUser: newUser });
              }
              else {
                this.setState({ currentUser: '' });
              }
            }
  
  render() {
    const {currentUser, messagesList}=this.state;

    return (
      <div className="app">
          <Main userName={currentUser.userName}/>
          {!currentUser &&
                <LogIn />
          }

          {currentUser &&
            <div className="app-content">
                <MessageList messagesList={messagesList}/>
                <MessageFrom currentUser={currentUser}/>
            </div>
          }
      </div>
    );
  }
}

export default App;
