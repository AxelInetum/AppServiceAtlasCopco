import {
    FILL_GRAPHDATA_USER
} from '../Types';

//cada reducer tiene su state 
const initialState = {
     GraphDataUser:{},
}

export default function (state = initialState, action){
    debugger;
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