import {
    //SHOW_EDIT_POPUP_TRUCK,
    //HIDDEN_EDIT_POPUP_TRUCK,
    GET_LIST_ORDERS,
    SHOW_POPUP_CREATE_ORDER
    //EDIT_TRUCK,
    //ERROR_EDIT_TRUCK,
    //DELETE_TRUCK,
    //HIDDEN_DELETE_POPUP_TRUCK,
    //SHOW_DELETE_POPUP_TRUCK,
    //CREATE_TRUCK,
    //SET_ID_SELECTED_TRUCK,
    //UPDATE_LIST_TRUCKS_FILTER,
    //SHOW_POPUP_TRUCKS_FILTER,
    //UPDATE_OBJECT_FILTER_TRUCK
} from '../Types';

//cada reducer tiene su state 
const initialState = {
     /*EditTruckpopup:false,
     DeleteTruckpopup:false,
     PopupFilter:false,
     FilterTruck: {
        valueComboFilterTruck:'',
        valueFilter:''
      },*/
     showcreateorderpopup:false,
     ListOrders:[],
     ListOrders2:[],
     idOrderSelected:0

}

export default function (state = initialState, action){
    debugger;
    switch(action.type)
    {

        case GET_LIST_ORDERS:
            return {
                ...state,
                ListOrders:action.payload,
                ListOrders2:action.payload
            }
        case SHOW_POPUP_CREATE_ORDER:
            debugger;
                return {
                ...state,
                showcreatepopup:action.payload
            }
         /*case SHOW_EDIT_POPUP_TRUCK:
            return {
                ...state,
                EditTruckpopup:true 
            }
         case HIDDEN_EDIT_POPUP_TRUCK:
            return {
                ...state,
                EditTruckpopup:false
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
            debugger;
            return {
                ...state,
                ListTrucks:action.payload
            }
            case UPDATE_OBJECT_FILTER_TRUCK:
                debugger;
                return {
                    // Copy the whole state
                    ...state,
                    // Overwrite the filters value
                    FilterTruck: {
                      // copy the other filter fields
                      ...state.filters,
                      // And replace the status field with the new value
                      [action.payload.fieldName]:action.payload.value,
                    }
                }*/
            default:
             return state;
    }
}

