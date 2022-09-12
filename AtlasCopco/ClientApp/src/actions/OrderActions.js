import {
    GET_TYPES_ORDERS,
    CREATE_ORDER,
    EDIT_ORDER,
    GET_LIST_ORDERS,
    FILTER_ORDERS_CALENDAR_TYPE,
    ALL_ORDERS_CALENDAR,
    SHOW_EDIT_ORDER_POPUP_CALENDAR,
    SHOW_CREATE_ORDER_POPUP_CALENDAR 
} from '../Types';

import Orderservice from '../Services/OrderService';
import Alert from '../components/Alert/Alert';


export function GetlistOrders ({t}){
    debugger;
    return async (dispatch) =>{                
         const p = Promise.resolve(new Orderservice().getOrderList());
         p.then(listOrders => {
             if (listOrders!=null)
             {
                 dispatch(getlistOrders(listOrders));
             }
             else{
                 Alert(t('nosehapodidocargar'),t('contacteadministrador'),'error');
             }
         });            
    }
 }
 
 const getlistOrders = listOrders =>({
     type:GET_LIST_ORDERS,
     payload:listOrders
 });


 export function GetTypesOrders ({t}){
    debugger;
    return async (dispatch) =>{                
         const p = Promise.resolve(new Orderservice().getOrderTypes());
         p.then(listTypesOrders => {
            debugger;
             if (listTypesOrders!=null)
             {
                 dispatch(getlistTypeOrders(listTypesOrders));
             }
             else{
                 Alert(t('nosehapodidocargar'),t('contacteadministrador'),'error');
             }
         });            
    }
 }
 
 const getlistTypeOrders = listTypesOrders =>({
     type:GET_TYPES_ORDERS,
     payload:listTypesOrders 
 });

 export function CreateOrders(Order,{t}){
    return async (dispatch) =>{  
        debugger;  
         const p = Promise.resolve( new Orderservice ().createOrder(Order));
         p.then(response => {
             if (response.createdOrder >0 )
             {
                Order.id = response.createdOrder;
                debugger;
                 //Order.start = '2022-09-05';
                 //Order.end = '2022-09-05';
                 debugger;
                 dispatch(createOrder(response));
                 dispatch(popupCreateCalendar(false));
                 Alert(t('pedidoCreado'),'El registro ha sido creado con exito.','success');
             }
             else{
                 Alert(t('nosehaeliminado'),t('contacteadministrador'),"error");
             }    
         });                     
    }
 }
 
 const createOrder = order =>({
     type:CREATE_ORDER,
     payload:order
 });


 export function EditOrders(Order,{t}){
    debugger;
    Order.title = Order.title + "s";
   return async (dispatch) =>{    
        const p = Promise.resolve( new Orderservice().updateOrder(Order));
        p.then(response => {
            if (response)
            {
                dispatch(editOrder(Order));
                dispatch(popupEditorderCalendar(false));
                Alert(t('actualizadocorrectamen'),t('registroactualizadocor'),'success'); 
            }
            else{
              
                Alert(t('noseactulizado'),t('contacteadministrador'),'error');
            }    
        });                     
   }
}

const editOrder= order =>({
    type:EDIT_ORDER,
    payload:order
});

export function FilterOrdersByType(value,{t}){
    debugger;
    return async (dispatch) =>{   
        dispatch(filterOrderByType(value));                            
    }
 }
 
 const filterOrderByType= value =>({
     type:FILTER_ORDERS_CALENDAR_TYPE,
     payload:value 
 });


 export function AllOrdersCalendar(){
    debugger;
    return async (dispatch) =>{   
        dispatch(allOrdersCalendar());                            
    }
 }
 
 const allOrdersCalendar= () =>({
     type:ALL_ORDERS_CALENDAR,
     payload:''
 });

 export function PopupEditorderCalendar (show){
    return (dispatch) =>{
        dispatch(popupEditorderCalendar (show))
 
    }
 }
 
 const popupEditorderCalendar  = show =>({
     type: SHOW_EDIT_ORDER_POPUP_CALENDAR,
     payload:show
 });


 export function PopupCreateCalendar (show){
    return (dispatch) =>{
        dispatch(popupCreateCalendar (show))
 
    }
 }
 
 const popupCreateCalendar = show =>({
     type:SHOW_CREATE_ORDER_POPUP_CALENDAR,
     payload:show
 });





/*

export function ShowDeletePopupTruck(alerta)
{
    return (dispatch) => {
        dispatch(showDeletePopupTruck(alerta))
    }
}

const showDeletePopupTruck= alerta =>({
    type:SHOW_DELETE_POPUP_TRUCK,
    payload:alerta 
})

export function HiddenEditPopupTruck (alerta){
   return (dispatch) =>{
       dispatch(hiddenEditPopupTruck(alerta))
   }
}

const hiddenEditPopupTruck = alerta =>({
    type:HIDDEN_EDIT_POPUP_TRUCK,
    payload:alerta
});

export function HiddenDeletePopupTruck(alerta){
   return (dispatch) =>{
       dispatch(hiddenDeletePopupTruck(alerta))
   }
}

const hiddenDeletePopupTruck = alerta =>({
    type:HIDDEN_DELETE_POPUP_TRUCK,
    payload:alerta
});

export function GetlistTrucks (alerta,{t}){
   return async (dispatch) =>{                
        const p = Promise.resolve(new TruckService().getTruckList());
        p.then(listTrucks => {
            if (listTrucks !=null)
            {
                dispatch(getlistTrucks(listTrucks));
            }
            else{
                Alert(t('nosehapodidocargar'),t('contacteadministrador'),'error');
            }
        });            
   }
}

const getlistTrucks = listTrucks =>({
    type:GET_LIST_TRUCKS,
    payload:listTrucks
});

export function EditTrucks(TruckSelected,{t}){
    debugger;
   return async (dispatch) =>{    
        const p = Promise.resolve( new TruckService().updateTruck(TruckSelected));
        p.then(response => {
            if (response)
            {
                debugger;
                dispatch(editTruck(TruckSelected));
                Alert(t('actualizadocorrectamen'),t('registroactualizadocor'),'success'); 
            }
            else{
                dispatch(hiddenEditPopupTruck(false));
                Alert(t('noseactulizado'),t('contacteadministrador'),'error');
            }    
        });                     
   }
}

const editTruck = TruckSelected =>({
    type:EDIT_TRUCK,
    payload:TruckSelected
});

export function DeleteTrucks(id,{t}){
    debugger;
    return async (dispatch) =>{   
        debugger;   
         const p = Promise.resolve( new TruckService().deleteTruck(id));
         p.then(response => {
             if (response)
             {    
                 dispatch(deleteTruck(id));
                 Alert(t('eliminadocorrectamente'),'El registro ha sido eliminado con exito.','success'); 
             }
             else{
                 dispatch(HiddenDeletePopupTruck(false));
                 Alert(t('nosehaeliminado'),t('contacteadministrador'),'error');
             }    
         });                     
    }
 }
 
 const deleteTruck = Truckid =>({
     type:DELETE_TRUCK,
     payload:Truckid
 });


 export function CreateTruck(Truck,history,{t}){
    debugger;
    return async (dispatch) =>{   
        debugger;   
         const p = Promise.resolve( new TruckService().insertTruck(Truck));
         p.then(response => {
             if (response)
             {
                 dispatch(createTruck(Truck));
                 Alert('Camion creado correctamente','El registro ha sido creado con exito.','success');
                 history.push('/TrucksPage');
             }
             else{
                 Alert(t('nosehaeliminado'),t('contacteadministrador'),"error");
             }    
         });                     
    }
 }
 
 const createTruck = Truck =>({
     type:CREATE_TRUCK,
     payload:Truck
 });

 export function SetIdTruckselected(id){
    return async(dispatch) =>{   
        dispatch(setIdTruckselected(id));                  
    }
 }

 const setIdTruckselected =id =>({
     type:SET_ID_SELECTED_TRUCK,
     payload:id
 });



 export function UpdateListTrucks(listTrucks){
    return async(dispatch) =>{   
        dispatch(updateListTrucks(listTrucks));                  
    }
 }

 const updateListTrucks =listTrucks =>({
     type:UPDATE_LIST_TRUCKS_FILTER,
     payload:listTrucks
 });

 export function PopupFilterTruck (open){
    return (dispatch) =>{
        dispatch(popupFilterTruck(open))
 
    }
 }
 
 const popupFilterTruck  = open =>({
     type:SHOW_POPUP_TRUCKS_FILTER,
     payload:open
 });


 export function UpdateObjectFilterTruck (objectfilter){
    return (dispatch) =>{
        dispatch(updateObjectFilterTruck(objectfilter))
 
    }
 }
 
 const updateObjectFilterTruck  = objectfilter =>({
     type:UPDATE_OBJECT_FILTER_TRUCK,
     payload:objectfilter
 });
*/

 

 



