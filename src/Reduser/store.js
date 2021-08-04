import {combineReducers,createStore} from "redux";
import profileReducer from "./Profile";
import chatsReducer from '../Reduser/Chats'


const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
});

export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)