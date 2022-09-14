import Calendar from '../Calendar/Calendar';
import React,{Fragment,useState} from 'react';
import { useEffect } from "react";
import {GetlistOrders,GetTypesOrders, FilterOrdersByType,AllOrdersCalendar} from '../../actions/OrderActions';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';


const CalendarPage = () => {
    debugger;
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const showEditPopup = useSelector(state => state.OrdersReducer.showeditpopupcalendar); 
    const showCreatePopup = useSelector(state => state.OrdersReducer.showcreatepopupcalendar); 
    const Orders = useSelector(state => state.OrdersReducer.ListOrders); 
    const ListTypesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 
    const [EditOrder,SetEditOrder] = useState({
        id: 0,
        title:'',
        Start:'',
        End:'',
        UpdaterOrder:0,
        Label: '',
        Value:'',
        backgroundColor:''
    }); 

    useEffect(() => {  
        dispatch(GetlistOrders({t}));
        dispatch(GetTypesOrders({t}));
      },[]);

      const handleClick =(TypeOrderId) => {
        //recuperamos todos los datos 
        if(TypeOrderId == 0)
        {
            dispatch(AllOrdersCalendar());
        }
        //sino filtramos
        else
        {
            dispatch(AllOrdersCalendar());
            dispatch(FilterOrdersByType(TypeOrderId,{t}));
        }
     }

     const classDiv =(color) => {
         return ' fc-event-main ' + color;
     }

  return (
    <Fragment>
        <div id='external-events'>
            <p>
                <strong>Types orders</strong>
            </p>
               {ListTypesOrders ? 
                        <div>
                            '<div onClick={() => handleClick(0)} class='blue fc-event-main'>todos</div></div> : ""}
                {ListTypesOrders ? ListTypesOrders.map(typesorder => (
                        <div>
                            <div onClick={() => handleClick(typesorder.value)} class={classDiv(typesorder.color)}>{typesorder.label}</div>
                        </div> 
                ))              
                : <div>no hay datos</div> } 
            </div>

            <div id='calendar-container'>
            <div id='calendar'></div>
            </div>
        <div>
            <Calendar Orders ={Orders} 
            showEditPopup={showEditPopup} 
            EditOrder={EditOrder} 
            SetEditOrder={SetEditOrder}
            showCreatePopup={showCreatePopup}
            dispatch={dispatch}
            t={t}></Calendar>         
        </div>   
    </Fragment>
  );
}

export default CalendarPage;
