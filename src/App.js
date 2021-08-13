import './App.css';
import React from 'react';
import Router from "./Profilese/Router";
import {Link} from "react-router-dom";
import firebase from "firebase";
import {useDispatch} from "react-redux";
import {changeIsAuthed} from "./actions/Profile";

function App() {
    const dispatch=useDispatch()

    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            console.log('onAuthStateChange',{user})
            if(user){
                dispatch(changeIsAuthed(!!user))
            }
        })
    },[])

    const handleSignOut=(e)=>{
        e.preventDefault()

        firebase.auth().signOut()
    }

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
                    <Link to='/news' className="Header-List-Item">
                        news
                    </Link>
                    <Link to='/login' className="Header-List-Item">
                        login
                    </Link>
                    <a onClick={handleSignOut} className="Header-List-Item">sing out</a>
               </div>
              <Router/>
          </div>




}

export default App;
