import React from "react";
import '../App.css'
import {Switch,Route,Redirect} from "react-router";
import Profile from "./Profile";
import Chat from "../Chat/Chat";
import Chats from "../Chat/Chats";
import News from "../News";
import Login from "../Login";
import {useSelector} from "react-redux";

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {
    return(

        <Switch>

            <PrivateRoute exact path="/chats" render={()=> <Chats />}/>

            <PrivateRoute path="/chats/:chatId" component={Chat}
                />}  />

            <PrivateRoute path="/profile" component={Profile} />
            <Route path='/login' component={Login}/>
            <Route path='/news' component={News}/>
            <Route path="/" render={()=><p>Home page</p>} />
            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}

