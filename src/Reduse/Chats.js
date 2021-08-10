import {ADD_CHAT} from "../actions/chats";
import {REMOVE_CHAT} from "../actions/chats";

const initialState={
    chat1:{
        id:'chat1',
        name:'Чат 1',
    },
    chat2:{
        id:'chat2',
        name:'Чат 2',
    },
    chat3:{
        id:'chat3',
        name:'Чат 3',
    }
}

export default function chatsReducer(state=initialState,action) {
    switch (action.type) {
        case ADD_CHAT:{
            return {
                ...state,
                [action.payload.id]:
                    action.payload,

            }
        }
        case REMOVE_CHAT:{
            delete state[action.payload.chatId]
            return {
                ...state,

            }
        }
        default:
            return state
    }
}


