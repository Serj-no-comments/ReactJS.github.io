import React from "react";
import '../App.css'
import {Switch,Route} from "react-router";
import App from "../App";
import { Link } from 'react-router-dom'
import ChatItem from "../Cart/ChatItem";
import Profile from "./Profile";



export default function Router() {
    return(
    <div className="Header container">
        <div className="Header-List">
            <Link to='/' className="Header-List-Item">
                Home
            </Link>
            <Link to="/chats" className="Header-List-Item">
                Chats
            </Link>
            <Link to="/profile" className="Header-List-Item">
                Profile
            </Link>
        </div>


        <Switch>

            <Route exact path="/chats" component={App}  />

            <Route path="/chats/:chatId" component={App} />

            <Route path="/profile" component={Profile} />

            <Route path="/" render={()=><p>Home Page</p>} />

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    </div>
    )
}

