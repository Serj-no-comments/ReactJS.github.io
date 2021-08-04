export const CHANGE_IS_ONLINE="PROFILE::CHANGE_IS_ONLINE"

export const changeIsOnline=(isOnline)=>({
    type:CHANGE_IS_ONLINE,
    payload:{
        isOnline,
    },
})