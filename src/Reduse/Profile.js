import {CHANGE_IS_AUTHED, CHANGE_IS_ONLINE} from '../actions/Profile';

const initialState={
    name: 'Sergei',
    age: 24,
    gender:'Male',
    isOnline: true,
    isAuthed: false,
}

export default function reducer(state=initialState,action){
    switch (action.type) {
        case CHANGE_IS_ONLINE:{
            return{
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        case CHANGE_IS_AUTHED:{
            return {
                ...state,
                isAuthed:action.payload.isAuthed,
            }
        }
        default:
            return state
    }


}
