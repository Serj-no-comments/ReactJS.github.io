import {AUTHOR} from "../Chat/Chat";
import firebase from "firebase";
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
        firebase.database().ref('messages').child(chatId).push(message)

        let timer=setTimeout(()=>{
            firebase.database().ref('messages').child(chatId).push({
                id: `message${Date.now()}`,
                author: AUTHOR.BOT,
                text: 'Привет'})

            clearTimeout(timer)
        },1500)
    }
}

export const subscribeOnMessagesChanging=(chatId)=>{
    return(dispatch,getState)=>{
        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_added',(snapshot)=>{
                console.log('child_added',snapshot.val())

                dispatch(addMessage(chatId,snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_changed',(snapshot)=>{
                console.log('child_changed',snapshot.val())

                dispatch(addMessage(chatId,snapshot.val()))
            })
    }
    }




