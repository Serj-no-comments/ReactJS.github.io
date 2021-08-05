import React from "react";
import {List} from "@material-ui/core";
import {Link} from "react-router-dom";
import App from "../App";

function Home(props) {
    const { chats, currentChat,onCurrentChatChange}=props


    // const handleAddChat=(chatName)=>{
    //     setChats((currentChats)=>[
    //         ...currentChats,
    //         {name:chatName,id:`chat${Date.now()}`},
    //     ])
    // }
    //
    // const handleRemoveChat=(chatId)=>{
    //     setChats((currentChats)=>
    //         currentChats.filter((chat)=>chat.id !==chatId)
    //     )
    // }



    return (
        <div className="App container" >
            <List className='app-sideBar'  subheader="Chat's list">
                <div className='flex' >
                    <div className='app-sideBar-left'>
                        {chats.map((chat)=>
                            <Link className="flex-Item"
                                  button='true'
                                  key={chat.id}
                                  selected={chat.id===currentChat.id}
                                  onClick={()=>onCurrentChatChange(chat)}>
                                {chat.name}
                            </Link>)}

                    </div>

                </div>

            </List>


        </div>


    );
}

export default Home