import {
    //SHOW_EDIT_POPUP_TRUCK,
    //HIDDEN_EDIT_POPUP_TRUCK,
    GET_LIST_ORDERS,
    CREATE_ORDER,
    EDIT_ORDER,
    GET_TYPES_ORDERS,
    FILTER_ORDERS_CALENDAR_TYPE,
    ALL_ORDERS_CALENDAR,
    SHOW_EDIT_ORDER_POPUP_CALENDAR,
    SHOW_CREATE_ORDER_POPUP_CALENDAR
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
     showeditpopupcalendar:false,
     showcreatepopupcalendar:false,
     ListOrders:[],
     ListOrders2:[],
     ListTypesOrders:[],
     ListTYpesOrders2:[],
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
        case GET_TYPES_ORDERS:
            debugger;
            return {
                ...state,
                ListTypesOrders:action.payload,
                ListTYpesOrders2:action.payload
            }
        case CREATE_ORDER:
            debugger;
            return {
                ...state,
                ListOrders: [...state.ListOrders,action.payload],
                ListOrders2: [...state.ListOrders2,action.payload]
            }     
        case EDIT_ORDER:
            debugger;
                return {
                    ...state,
                    ListOrders: state.ListOrders.map(order => 
                        order.id === action.payload.id ? order = action.payload : order
                    ),
                    ListOrders2: state.ListOrders2.map(order => 
                        order.id === action.payload.id ? order = action.payload : order
                    ),
                    EditTruckpopup:false
                }
        case FILTER_ORDERS_CALENDAR_TYPE:
                return {
                    ...state,
                    ListOrders:state. ListOrders.filter(order => order.value ==action.payload),
                }
        case ALL_ORDERS_CALENDAR:
            return {
                ...state,
                ListOrders:state.ListOrders2,
            }
        case SHOW_EDIT_ORDER_POPUP_CALENDAR:
            debugger;
                return {
                    ...state,
                    showeditpopupcalendar:action.payload,
                }
        case SHOW_CREATE_ORDER_POPUP_CALENDAR:
            debugger;
                return {
                    ...state,
                    showcreatepopupcalendar:action.payload,
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

