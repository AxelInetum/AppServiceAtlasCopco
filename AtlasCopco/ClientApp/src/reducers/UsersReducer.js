import {
    LOGIN_USER
} from '../Types';

//cada reducer tiene su state 
const initialState = {
     dataUserLoginldpa:{},
}

export default function (state = initialState, action){
    debugger;
    switch(action.type)
    {
        case LOGIN_USER:
            return {
                ...state,
                dataUserLoginldpa: action.payload
            }
         default:
             return state;
    }
}