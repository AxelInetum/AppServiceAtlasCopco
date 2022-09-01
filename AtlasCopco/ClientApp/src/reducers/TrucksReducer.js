import {
    SHOW_EDIT_POPUP_TRUCK,
    HIDDEN_EDIT_POPUP_TRUCK,
    GET_LIST_TRUCKS,
    EDIT_TRUCK,
    ERROR_EDIT_TRUCK,
    DELETE_TRUCK,
    HIDDEN_DELETE_POPUP_TRUCK,
    SHOW_DELETE_POPUP_TRUCK,
    CREATE_TRUCK,
    SET_ID_SELECTED_TRUCK,
    UPDATE_LIST_TRUCKS_FILTER,
    SHOW_POPUP_TRUCKS_FILTER
} from '../Types';

//cada reducer tiene su state 
const initialState = {
     EditTruckpopup:false,
     DeleteTruckpopup:false,
     PopupFilter:false,
     ListTrucks:[],
     ListTrucks2:[],
     idTruckSelected:0
}

export default function (state = initialState, action){
    debugger;
    switch(action.type)
    {
         case SHOW_EDIT_POPUP_TRUCK:
            return {
                ...state,
                EditTruckpopup:true 
            }
         case HIDDEN_EDIT_POPUP_TRUCK:
            return {
                ...state,
                EditTruckpopup:false
            }
        case GET_LIST_TRUCKS:
            return {
                ...state,
                ListTrucks:action.payload,
                ListTrucks2:action.payload
            }
        case EDIT_TRUCK:
            return {
                ...state,
                ListTrucks: state.ListTrucks.map(truck => 
                    truck.id === action.payload.id ? truck = action.payload : truck
                ),
                ListTrucks2: state.ListTrucks2.map(truck => 
                    truck.id === action.payload.id ? truck = action.payload : truck
                ),
                EditTruckpopup:false
            }
        case DELETE_TRUCK:
            return {
                ...state,
                ListTrucks:state.ListTrucks.filter(truck => truck.id !==action.payload),
                ListTrucks2:state.ListTrucks2.filter(truck => truck.id !==action.payload),
                DeleteTruckpopup:false
            }
        case HIDDEN_DELETE_POPUP_TRUCK:
            return {
                ...state,
                DeleteTruckpopup:false
            }
        case SHOW_DELETE_POPUP_TRUCK:
            return {
                ...state,
                DeleteTruckpopup:true
            }
        case SHOW_POPUP_TRUCKS_FILTER:
            return {
                ...state,
                PopupFilter:action.payload
            }
        case CREATE_TRUCK:
            return {
                ...state,
                ListTrucks: [...state.ListTrucks,action.payload],
                ListTrucks2: [...state.ListTrucks2,action.payload]
            }
        case SET_ID_SELECTED_TRUCK:
                return {
                    ...state,
                    idTruckSelected: action.payload
                }
        case UPDATE_LIST_TRUCKS_FILTER:
            return {
                ...state,
                ListTrucks:action.payload
            }
         default:
             return state;
    }
}