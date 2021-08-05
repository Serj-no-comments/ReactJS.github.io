import './App.css';
import React from 'react';
import Router from "./Profilese/Router";
import {Link} from "react-router-dom";

function App() {


  return <div className="Header container">
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
              <Router/>
          </div>




}

export default App;
