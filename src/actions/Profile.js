export const CHANGE_IS_ONLINE="PROFILE::CHANGE_IS_ONLINE"
export const CHANGE_IS_AUTHED="PROFILE::CHANGE_IS_AUTHED"

export const changeIsOnline=(isOnline)=>({
    type:CHANGE_IS_ONLINE,
    payload:{
        isOnline,
    },
})

export const changeIsAuthed=(isAuthed)=>({
    type:CHANGE_IS_AUTHED,
    payload:{
        isAuthed,
    }
})

export const changeIsOnlineWithThunk=(isOnline)=>{
    return (dispatch,getState)=> {
        setTimeout(()=>{
            dispatch(changeIsOnline(isOnline))
        },1000)
    }
}