import Calendar from '../Calendar/Calendar';
import React,{Fragment,useState} from 'react';
import { useEffect } from "react";
import {GetlistOrders} from '../../actions/OrderActions';
import {useDispatch,useSelector} from 'react-redux';
import { useTranslation } from 'react-i18next';


const CalendarPage = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const [showCreatePopup,setshowCreatePopup] = useState(false);
    const [showEditPopup,setshowEditPopup] = useState(false);
    const Orders = useSelector(state => state.OrdersReducer.ListOrders); 

    useEffect(() => {  
        dispatch(GetlistOrders({t}));
      },[]);

  return (
    <Fragment>
        <div id='external-events'>
            <p>
                <strong>Draggable Events</strong>
            </p>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>My Event 1</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>My Event 2</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>My Event 3</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>My Event 4</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>My Event 5</div>
            </div>

            <p>
                <input type='checkbox' id='drop-remove' />
                <label for='drop-remove'>remove after drop</label>
            </p>
            </div>

            <div id='calendar-container'>
            <div id='calendar'></div>
            </div>
        <div>
            <Calendar Orders ={Orders} 
            showEditPopup={showEditPopup} 
            setshowEditPopup={setshowEditPopup} 
            setshowCreatePopup={setshowCreatePopup} 
            showCreatePopup={showCreatePopup}></Calendar>
             
        </div>
    
        
    </Fragment>
  );
}

export default CalendarPage;
