import {
    FILL_GRAPHDATA_USER
} from '../Types';

//cada reducer tiene su state 
const initialState = {
     GraphDataUser:null,
}

export default function (state = initialState, action){
    switch(action.type)
    {
        case FILL_GRAPHDATA_USER:
            return {
                ...state,
                GraphDataUser: action.payload
            }
         default:
             return state;
    }
}