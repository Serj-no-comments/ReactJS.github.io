import React from "react";
import {TextField, Button} from "@material-ui/core";
import firebase from "firebase";
import ProfileInfo from "../Profilese/Component";

export default function Login(props) {
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [error,setError]=React.useState('')
    const [isSigningUp,setIsSigningUp]=React.useState(false)

    const handleChangeEmail=e=>setEmail(e.target.value)
    const handleChangePassword=e=>setPassword(e.target.value)
    const handleIsSigningUpChange=e=>setIsSigningUp(e.target.checked)

    const handleLogin=async ()=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch(error) {
            setError(error.message)
        }
    }

    const handleSignUp=async ()=>{
        try{
            await firebase.auth().createUserWithEmailAndPassword(email,password)
        } catch(error) {
            setError(error.message)
        }
    }

    const handleSubmit=async ()=>{
        console.log('Try to login',{email,password})
        if(!email ||  !password){
            setError('Input yours data')
            return
        }
        if(isSigningUp){
            handleSignUp()
            return
        }
        handleLogin()
    }
    return <div>
        <p>{isSigningUp?'Sign Up':'Login'}</p>
        <TextField
            className='App-form-input'
            placeholder='Email'
            value={email}
            type='email'
            onChange={handleChangeEmail}
        />


        <TextField
            className='App-form-input'
            placeholder='Password'
            value={password}
            type='password'
            onChange={handleChangePassword}
        />
        <div className="app-date">
            <input
                type="checkbox"
                checked={isSigningUp}
                onChange={handleIsSigningUpChange}
            />
            <span>Have't registration</span>
        </div>

        <button
            className='App-form-button'
            onClick={handleSubmit}
        >
            {isSigningUp?('Sign Up'):'Login'}
        </button>

        <p>{error}</p>
    </div>
}