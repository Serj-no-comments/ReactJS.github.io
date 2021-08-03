import {useDispatch, useSelector} from "react-redux";
import {changeName} from "./Action";
import Input from "../Input/Input";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";

export default function Profile() {

    const dispatch=useDispatch()
    const {name,age,gender}=useSelector(state => state.profile)


    const handleNameSubmit=(newName)=>{
        dispatch(changeName(newName))
    }

    return(
        <div className="app-date">
            <p className='app-date-text'>
                <b>Name: </b>
                {name}
            </p>
            <p className='app-date-text'>
                <b>Age: </b>
                {age}
            </p>
            <p className='app-date-text'>
                <b>Gender: </b>
                {gender}
            </p>
            <input
                type="checkbox"
                onSubmit={handleNameSubmit}
            />
            <span>Male</span>
            <input
                type="checkbox"
                onSubmit={handleNameSubmit}
            />
            <span>Female</span>




        </div>
    )

}