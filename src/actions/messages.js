import {AUTHOR} from "../Chat/Chat";
export const ADD_MESSAGE='MESSAGES::ADD_MESSAGE'

export const addMessage=(chatId,message)=>({
    type: ADD_MESSAGE,
    payload:{
        chatId,
        message,
    }
})

export  const sendMessageBot=(chatId,message)=>{
    return (dispatch, getState)=>{
        dispatch(addMessage(chatId,message))

        let timer=setTimeout(()=>{
            dispatch(addMessage(chatId,{
                id: `message${Date.now()}`,
                author: AUTHOR.BOT,
                text: 'Привет'}))

            clearTimeout(timer)
        },1500)
    }
}

