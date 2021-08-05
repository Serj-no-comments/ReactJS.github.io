import {combineReducers,createStore} from "redux";
import profileReducer from "./Profile";
import chatsReducer from '../Redux/Chats'
import messagesReducer from '../Redux/Messages'

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)