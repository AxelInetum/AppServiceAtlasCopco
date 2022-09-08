import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Createorder from '../Order/CreateOrder';
import EditOrder from '../Order/EditOrder';
import {EditOrders} from '../../actions/OrderActions';

export default class Calendar extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      id:0,     
      title:'',
      Start:'',
      End:'',
      UpdateOrder:0 ,
    };
  }
  
  render() {
    return (
      <>
        <FullCalendar defaultView="dayGridMonth" 
        headerToolbar={{ left: 'prev,next,today', 
        center: 'title',
        right: 'timeGridDay,timeGridWeek,dayGridMonth' }}
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        dateClick={this.handleDateClick}
        editable= {true}
        selectable={true}
        droppable={true}
        eventDrop={(event,info)=>this.moveEventdropCalendar(event ,info)}
        eventClick={(info) => this.HandleEditPopupClick(info)}   
        events={this.props.Orders}/>
        <Createorder showCreatePopup={this.props.showCreatePopup}  
        setshowCreatePopup={this.props.setshowCreatePopup} ></Createorder>

        <EditOrder loadDatas={this.state} showEditPopup={this.props.showEditPopup} 
         setshowEditPopup={this.props.setshowEditPopup} ></ EditOrder>
      </>
     )
   }
  
    moveEventdropCalendar = (event,info) => 
    {
      this.state.id = event.event._def.publicId;
      this.state.title = event.event.title;
      this.state.Start =  event.event._instance.range.start;
      this.state.End =  event.event._instance.range.end;
      this.state.UpdateOrder = 0;     
      this.props.dispatch(EditOrders(this.state,this.props.t));

  }

  handleDateClick = (arg) => { // bind with an arrow function
    ///alert(arg);
    this.props.setshowCreatePopup(true);
  }


  HandleEditPopupClick = (event) => {
    debugger;
    this.state.id = event.event._def.publicId;
    this.state.title = event.event.title;
    this.state.Start =  event.event._instance.range.start;
    this.state.End =  event.event._instance.range.end;
    this.state.UpdateOrder = 0;
    this.props.setshowEditPopup(true);
  }
}


