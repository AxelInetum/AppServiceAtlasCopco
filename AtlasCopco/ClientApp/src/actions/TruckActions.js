import {
    SHOW_EDIT_POPUP_TRUCK,
    HIDDEN_EDIT_POPUP_TRUCK,
    GET_LIST_TRUCKS,
    EDIT_TRUCK,
    DELETE_TRUCK,
    HIDDEN_DELETE_POPUP_TRUCK,
    SHOW_DELETE_POPUP_TRUCK,
    CREATE_TRUCK,
    SET_ID_SELECTED_TRUCK,
    UPDATE_LIST_TRUCKS_FILTER
} from '../Types';

import TruckService from '../Services/TruckService';
import Alert from '../components/Alert/Alert';

export function ShowEditPopupTruck(alerta)
{
    return (dispatch) => {
        dispatch(showEditPopupTruck(alerta))
    }
}

const showEditPopupTruck= alerta =>({
    type:SHOW_EDIT_POPUP_TRUCK,
    payload:alerta 
})

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

export function DeleteTrucks(id,currentPage,setCurrentPage,{t}){
    debugger;
    return async (dispatch) =>{   
        debugger;   
         const p = Promise.resolve( new TruckService().deleteTruck(id));
         p.then(response => {
             if (response)
             {
                 dispatch(deleteTruck(id));
                 setCurrentPage(currentPage-1);
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





