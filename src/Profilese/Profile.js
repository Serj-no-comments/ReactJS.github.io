import {useDispatch, useSelector} from "react-redux";
import { changeIsOnlineWithThunk} from '../actions/Profile';
import React, {useCallback} from "react";
import ProfileInfo from "./Component";

export default function Profile() {

    const dispatch=useDispatch()
    const {name,age,gender, isOnline}=useSelector(state => state.profile)


    const handleOnline=(event)=>{
        dispatch(changeIsOnlineWithThunk(event.target.checked))
    }

    return(

        <div className="app-date">
            <input
                type="checkbox"
                checked={isOnline}
                onChange={handleOnline}
            />
            <span>Offline</span>

            <ProfileInfo age={age} name={name} gender={gender}/>






        </div>
    )

}