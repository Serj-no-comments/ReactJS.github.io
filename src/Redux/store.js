import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Profile";
import chatsReducer from '../Redux/Chats';
import messagesReducer from '../Redux/Messages';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store=createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)