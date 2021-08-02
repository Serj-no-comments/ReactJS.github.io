
import './App.css';
import React from 'react';
import {Switch} from "react-router";
import {Link} from "react-router-dom";
import {createTheme,ThemeProvider} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import ChatItem from "./Cart/ChatItem";
import {List,ListItem} from "@material-ui/core";



function App() {

    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Чат 1' ,to: '/chats/chat1'},
        { id: 'chat2', name: 'Чат 2' ,to: '/chats/chat2'},
        { id: 'chat3', name: 'Чат 3' ,to: '/chats/chat3'},
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])
    const handleChangeChat = (chat) => setCurrentChat(chat)




  return (


          <div className="App container" >

                      <List className='app-sideBar'  subheader="Chat's list">
                          <div className='flex' >
                              <div className='app-sideBar-left'>
                                  {chats.map((chat)=> <Link className="flex-Item" button to={chat.to} key={chat.id} to={chat.to} selected={chat.id===currentChat.id} onClick={setCurrentChat}>{chat.name}</Link>)}
                              </div>
                              <ChatItem />

                          </div>

                      </List>

          </div>


  );
}

export default App;
