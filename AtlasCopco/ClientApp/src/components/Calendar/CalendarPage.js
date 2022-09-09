import Calendar from '../Calendar/Calendar';
import React,{Fragment,useState} from 'react';
import { useEffect } from "react";
import {GetlistOrders,GetTypesOrders, FilterOrdersByType,AllOrdersCalendar} from '../../actions/OrderActions';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';


const CalendarPage = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [showCreatePopup,setshowCreatePopup] = useState(false);
    const [showEditPopup,setshowEditPopup] = useState(false);
    const Orders = useSelector(state => state.OrdersReducer.ListOrders); 
    const ListTypesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 

    useEffect(() => {  
        dispatch(GetlistOrders({t}));
        dispatch(GetTypesOrders({t}));
      },[]);

      const handleClick =(TypeOrderId) => {
        debugger;
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

  return (
    <Fragment>
        <div id='external-events'>
            <p>
                <strong>Types orders</strong>
            </p>
               {ListTypesOrders ? 
                            <div className='purple'class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div onClick={() => handleClick(0)} class='fc-event-main'>todos</div></div> : ""}
                {ListTypesOrders ? ListTypesOrders.map(typesorder => (
                        <div className={typesorder.color} class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div onClick={() => handleClick(typesorder.value)} class='fc-event-main'>{typesorder.label}</div>
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
            setshowEditPopup={setshowEditPopup} 
            setshowCreatePopup={setshowCreatePopup} 
            showCreatePopup={showCreatePopup}
            dispatch={dispatch}
            t={t}></Calendar>         
        </div>   
    </Fragment>
  );
}

export default CalendarPage;
