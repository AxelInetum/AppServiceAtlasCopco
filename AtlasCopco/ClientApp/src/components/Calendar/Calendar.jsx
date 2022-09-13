import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Createorder from '../Order/CreateOrder';
import EditOrder from '../Order/EditOrder';
import {EditOrders,PopupEditorderCalendar,PopupCreateCalendar} from '../../actions/OrderActions';
export default class Calendar extends React.Component {
  
  constructor(props) {
    debugger;

    super(props)
    this.state = { 
      id:0,     
      title:'',
      Start:'',
      End:'',
      Label:'',
      Value:0,
      backgroundColor:'',
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
        eventResize={(event)=>this.eventResize(event)}  
        eventDrop={(event,info)=>this.moveEventdropCalendar(event ,info)}
        eventClick={(info) => this.HandleEditPopupClick(info)}   
        events={this.props.Orders}/>
        <Createorder showCreatePopup={this.props.showCreatePopup} ></Createorder>
        <EditOrder loadDatas={this.state} showEditPopup={this.props.showEditPopup} ></ EditOrder>
      </>
     )
   }
  
    moveEventdropCalendar = (event,info) => 
    {
      debugger;
      this.state.id = event.event._def.publicId;
      this.state.title = event.event.title;
      this.state.Start = event.event._instance.range.start;
      this.state.End =  event.event._instance.range.end;
      this.state.UpdateOrder = 0; 
      this.state.Label = event.event._def.extendedProps.label;
      this.state.Value = event.event._def.extendedProps.value;
      this.state.backgroundColor = event.event._def.ui.backgroundColor;
      var t = this.props.t;
      this.props.dispatch(EditOrders(this.state,{t}));
    }

    //when click for new order (out events)
    handleDateClick = (arg) => {  
      this.props.dispatch(PopupCreateCalendar(true));
    }

    //when resize event 
    eventResize = (event) => {    
      this.state.id = event.event._def.publicId;
      this.state.title = event.event.title;
      this.state.Start = event.event._instance.range.start;
      this.state.End =  event.event._instance.range.end;
      this.state.UpdateOrder = 0;     
      var t = this.props.t;
      this.props.dispatch(EditOrders(this.state,{t}));
    }

    //when click event open popup edit 
    HandleEditPopupClick = (event) => {
      debugger;
      this.state.id = event.event._def.publicId;
      this.state.title = event.event.title;
      this.state.Start =   event.event._instance.range.start;
      this.state.End =  event.event._instance.range.end;
      this.state.UpdateOrder = 0;
      this.state.Label = event.event._def.extendedProps.label;
      this.state.Value = event.event._def.extendedProps.value;
      this.state.backgroundColor = event.event._def.ui.backgroundColor;
      this.props.dispatch(PopupEditorderCalendar(true));
    }

    FormatDate(date)
    {
        return date.getFullYear()  + '-' +  (date.getDate() < 10 ? '0' + date.getDate():date.getDate()) + '-'+ ((date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1):(date.getMonth()+1)) + ' ' + (date.getHours() < 10 ? '0' + date.getHours():date.getHours())  + ':' +  (date.getMinutes() < 10 ? '0' + date.getMinutes():date.getMinutes()) + ':' + '00';
    }
}


