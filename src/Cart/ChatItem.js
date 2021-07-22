import React from "react";
import Input from "../Input/Input"
import PropTypes from "prop-types";
import usePrevious from "react-hooks-use-previous";

const AUTHOR={
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

const ChatItem=(props)=>{

    const [messageList,setMessageList]=React.useState([])

    const timer = React.useRef(null)

    const prevMessageList = usePrevious(messageList)

    React.useEffect(() => {
        if (
            prevMessageList?.length < messageList.length &&
            messageList[messageList.length - 1].author !== AUTHOR.BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHOR.BOT, text: 'Привет' },
                    ]),
                1500
            )
        }
    }, [messageList, prevMessageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])


    const handleMessageSubmit=(newMessageText)=>{

        setMessageList(currentMessageList=>([...currentMessageList,{author:AUTHOR.ME,text:newMessageText}]))

    }

    return <div className="Chat">
        <div className='Message-css'>
            {messageList.map((message,index)=>(<Message key={index} id={message.id}  text={message.text} author={message.author}/>))}
        </div>
        <Input onSubmit={handleMessageSubmit}/>
    </div>

}

export default ChatItem
