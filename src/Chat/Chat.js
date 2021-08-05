import {useParams} from "react-router";
import React from "react";
import Input from "../Input/Input";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../actions/messages";

export const AUTHOR={
    BOT:'Bot',
    ME:'Me'

}
function Message(props){
    return <p className="Props-example" id={props.id} > {props.author} :{props.text} </p>
}
Message.propTypes={
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string
}

Message.defaultProps={
    id: 'goodItem'
}

const useIsChatExists=({chatId})=>{
    const chats=useSelector(state=>state.chats)
    return Boolean(Object.values(chats).find((chat)=>chat.id===chatId))
}

 const Chat=(props)=>{

    const {chatId}=useParams()

     // const [messageList,setMessageList]=React.useState([])

     const messageList=useSelector(state => state.messages[chatId]||[])
     const dispatch=useDispatch()


     // React.useEffect(() => {
     //     if (
     //         prevMessageList?.length < messageList.length &&
     //         messageList[messageList.length - 1].author !== AUTHOR.BOT
     //     ) {
     //         timer.current = setTimeout(
     //             () =>
     //                 setMessageList((currentMessageList) => [
     //                     ...currentMessageList,
     //                     { author: AUTHOR.BOT, text: 'Привет' },
     //                 ]),
     //             1500
     //         )
     //     }
     // }, [messageList, prevMessageList])



     const handleMessageSubmit=(newMessageText)=>{
        dispatch(addMessage(chatId,{id:`message${Date.now()}`,author:AUTHOR.ME,text:newMessageText}))
         // setMessageList(currentMessageList=>([...currentMessageList,{author:AUTHOR.ME,text:newMessageText}]))

     }

     const [currentChat, setCurrentChat] = React.useState([])
     const handleChangeChat = (chat) => setCurrentChat(chat)

     const isChatExists=useIsChatExists({chatId})


     return <div className='app-main' id={currentChat.id}>
         <div className="Chat">
             <div className='Message-css'>
                 {messageList.map((message)=>(<Message key={message.id} id={message.id}  text={message.text} author={message.author}/>))}
             </div>

             <Input onSubmit={handleMessageSubmit}/>

         </div>
     </div>

 }


export default Chat

