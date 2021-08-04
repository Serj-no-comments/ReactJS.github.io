import {useDispatch, useSelector} from "react-redux";
import {changeIsOnline} from "./Action";
import Input from "../Input/Input";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";

export default function Profile() {

    const dispatch=useDispatch()
    const {name,age,gender, isOnline}=useSelector(state => state.profile)


    const handleOnline=(event)=>{
        dispatch(changeIsOnline(event.target.checked))
    }

    return(

        <div className="app-date">
            <input
                type="checkbox"
                checked={isOnline}
                onChange={handleOnline}
            />
            <span>Offline</span>

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






        </div>
    )

}