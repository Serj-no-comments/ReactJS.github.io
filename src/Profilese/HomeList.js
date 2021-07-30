import React from "react";
import '../App.css'
import {Switch,Route} from "react-router";
import App from "../App";
import { Link } from 'react-router-dom'
import Chat from "../Cart/Chat";



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

            <Route path="/chat/:chatId" component={Chat} />

            {/*<Route path="/chat/chat2" component={Chat} />*/}

            {/*<Route path="/chat/chat2" component={Chat}/>*/}

            <Route path="/profile" exact render={()=><p>Profile page</p>} />

            <Route path="/" render={()=><p>Home Page</p>} />

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    </div>
    )
}

