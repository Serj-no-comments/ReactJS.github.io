import '../App.css'
import React from "react";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {List} from "@material-ui/core";
import Input from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addChat, removeChat} from "../actions/chats";


export default function Chats(props) {
    const {
        onRemoveChat,
    } = props

    const history = useHistory()

    const chats=useSelector((state)=>state.chats)
    const dispatch=useDispatch()

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat=(name)=>{
        dispatch(addChat(`chat${Date.now()}`,name))
    }

    const handleRemoveChat=(chatId)=>{
        dispatch(removeChat(chatId))
    }

    return (
        <div className="chats">
            <List className='app-sideBar'  subheader={<p>Chat's list</p>}>
                <div className='flex' >
                    <div className='app-sideBar-left'>
                        {Object.values(chats).map((chat)=>
                            <div>
                                <Link className="flex-Item"
                                      button='true'
                                      to={`/chats/${chat.id}`}
                                      key={chat.id}
                                      onClick={()=>handleChatLinkClick(chat)}>
                                    {chat.name}
                                </Link>
                                <button className='button' onClick={()=>handleRemoveChat(chat.id)}>
                                    Remove
                                </button>
                            </div>)}

                    </div>

                </div>

            </List>
            <Input
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={handleAddChat}
            />
        </div>
    )
}