import {CHANGE_NAME} from "../Profilese/Action";

const initialState={
    name: 'Sergei',
    age: 24,
    gender:'',
}

export default function reducer(state=initialState,action){
    switch (action.type) {
        case CHANGE_NAME:{
            return{
                ...state,
                name: action.payload.name,
            }
        }
        default:
            return state
    }


}
