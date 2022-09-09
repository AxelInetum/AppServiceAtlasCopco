import Calendar from '../Calendar/Calendar';
import React,{Fragment,useState} from 'react';
import { useEffect } from "react";
import {GetlistOrders,GetTypesOrders} from '../../actions/OrderActions';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';


const CalendarPage = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [showCreatePopup,setshowCreatePopup] = useState(false);
    const [showEditPopup,setshowEditPopup] = useState(false);
    const Orders = useSelector(state => state.OrdersReducer.ListOrders); 
    const ListTipyesOrders = useSelector(state => state.OrdersReducer.ListTypesOrders); 

    useEffect(() => {  
        dispatch(GetlistOrders({t}));
        dispatch(GetTypesOrders({t}));
      },[]);

      const handleClick =(TypeOrderId) => {
        alert(TypeOrderId);
     }

  return (
    <Fragment>
        <div id='external-events'>
            <p>
                <strong>Types orders</strong>
            </p>
                {ListTipyesOrders ? ListTipyesOrders.map(typesorder => (
                        <div>
                            {typesorder.Name}
                        </div> 
                )): <div>no hay datos</div> } 
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
