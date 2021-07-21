import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {createTheme,ThemeProvider} from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chat from "../src/Cart/ChatItem";
import {List,ListItem} from "@material-ui/core";



function App() {

    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' },
        { id: 'chat2', name: 'Чат 2' },
        { id: 'chat3', name: 'Чат 3' },
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])
    const handleChangeChat = (chat) => setCurrentChat(chat)

    const myThem=createTheme({
        palette:{
            background:{
                default: "lightblue"
            }
        }
    });


  return (
      <ThemeProvider theme={myThem}>
          <CssBaseline/>
          <div className="App container" >

                      <List className='app-sideBar'  subheader="Chat's list">
                          {chats.map((chat)=> <ListItem  button key={chat.id} selected={chat.id===currentChat.id} onClick={setCurrentChat}>{chat.name}</ListItem>)}
                      </List>

                  <div className='app-main'>
                      <Chat id={currentChat.id}/>
                  </div>
          </div>
      </ThemeProvider>

  );
}

export default App;
