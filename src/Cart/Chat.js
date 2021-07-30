import React from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router'
import App from "../App";
import ChatItem from "./ChatItem";
import Input from "../Input/Input";
function Chat () {


    const [currentChat, setCurrentChat] = React.useState([])
    const handleChangeChat = (chat) => setCurrentChat(chat)

    return (
        <div>
            <div className='app-main'>
                <ChatItem id={currentChat.id}/>
            </div>
        </div>
    )
}

export default Chat