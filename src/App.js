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
                    <Link to='/news' className="Header-List-Item">news</Link>
               </div>
              <Router/>
          </div>




}

export default App;
