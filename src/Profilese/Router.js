import React from "react";
import '../App.css'
import {Switch,Route} from "react-router";
import Profile from "./Profile";
import Chat from "../Chat/Chat";
import Chats from "../Chat/Chats";
import News from "../News";

export default function Router() {
    return(

        <Switch>

            <Route exact path="/chats" render={()=> <Chats />}/>

            <Route path="/chats/:chatId" component={Chat}
                />}  />

            <Route path="/profile" component={Profile} />
            <Route path='/news' component={News}/>
            <Route path="/" render={()=><p>Home page</p>} />
            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}

