import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Createorder from '../Order/CreateOrder';
import EditOrder from '../Order/EditOrder';
import {EditOrders,PopupEditorderCalendar,PopupCreateCalendar} from '../../actions/OrderActions';
import Moment from 'moment';
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
      this.state.Start = new Date(event.event._instance.range.start.split('(')[0]).toISOString().format('dd/MM/yyyy hh:mm:ss');
      this.state.End =  new Date(event.event._instance.range.end.split('(')[0]).toISOString().format('dd/MM/yyyy hh:mm:ss');
      this.state.UpdateOrder = 0;     
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
    this.state.Start = new Date(event.event._instance.range.start.split('(')[0]).toISOString().format('dd/MM/yyyy hh:mm:ss');
    this.state.End =  new Date(event.event._instance.range.end.split('(')[0]).toISOString().format('dd/MM/yyyy hh:mm:ss');
    this.state.UpdateOrder = 0;     
    var t = this.props.t;
    this.props.dispatch(EditOrders(this.state,{t}));
  }

  //when click event open popup edit 
  HandleEditPopupClick = (event) => {
    debugger;
    this.state.id = event.event._def.publicId;
    this.state.title = event.event.title;
  
    var start2 = new Date(Moment((event.event._instance.range.start).toString().split('(')[0]).format('DD/MM/yyyy hh:mm:ss'));
    this.state.Start = start2;

    var end2 = new Date(Moment((event.event._instance.range.end).toString().split('(')[0]).format('DD/MM/yyyy hh:mm:ss'));
    this.state.End = end2; 
    
    this.state.UpdateOrder = 0;
    this.state.Label = event.event._def.extendedProps.label;
    this.state.Value = event.event._def.extendedProps.value;
    //var axel = Moment('Fri Sep 09 2022 04:09:18 GMT+0200').format("dd/MM/yyyy hh:mm:ss");
          //loadDatas.End = Moment(loadDatas.End).format("dd/MM/yyyy hh:mm:ss");
      //loadDatas.Start = Moment(loadDatas.Start).format("dd/MM/yyyy hh:mm:ss");

      this.props.dispatch(PopupEditorderCalendar(true));
  }
}


