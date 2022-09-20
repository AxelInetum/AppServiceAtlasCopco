import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Createorder from '../Order/CreateOrder';
import EditOrder from '../Order/EditOrder';
import {EditOrders,PopupEditorderCalendar,PopupCreateCalendar} from '../../actions/OrderActions';
import moment from 'moment';
export default class Calendar extends React.Component {
  
  constructor(props) {
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
        timeZone='UTC'
        eventResize={(event)=>this.eventResize(event)}  
        eventDrop={(event,info)=>this.moveEventdropCalendar(event ,info)}
        eventClick={(info) => this.HandleEditPopupClick(info)}   
        events={this.props.Orders}/>
        <Createorder showCreatePopup={this.props.showCreatePopup} ></Createorder>
        <EditOrder loadDatas={this.props.EditOrder} SetEditOrder={this.props.SetEditOrder} showEditPopup={this.props.showEditPopup} ></ EditOrder>
      </>
     )
   }
  
    moveEventdropCalendar = (event,info) => 
    {
      debugger;
      var order = { 
        id:0,     
        title:'',
        Start:'',
        End:'',
        Label:'',
        Value:0,
        backgroundColor:'',
        UpdateOrder:0 
      };
      var t = this.props.t;
      order.id = event.event._def.publicId;
      order.title = event.event.title;
      order.Start = this.FormatDate(event.event._instance.range.start);
      order.End =this.FormatDate(event.event._instance.range.end);
      order.Label  = event.event._def.extendedProps.label;
      order.Value =  event.event._def.extendedProps.value;
      order.backgroundColor = event.event._def.ui.backgroundColor;

      this.props.SetEditOrder({
        ...EditOrder,
        'id': order.id ,
        'title':  order.title ,
        'Start' :order.Start,
        'End': order.End,
        'Label': order.Label,
        'Value':order.Value,
        'backgroundColor':  order.backgroundColor
       });
        


      this.props.dispatch(EditOrders(order,{t}));
    }

    FormatDate = (date) =>
    {
         debugger;
         if (date != "" && date!= undefined)
         {
        
            var yearmonthday = (new Date(date)).toISOString().slice(0, 10).split("-");
            var hourminutes =date.toGMTString().split(" ")[4].split(':');
           
            var year =parseInt(yearmonthday[0]);
            var month = parseInt(yearmonthday[1])-1;
            var day = parseInt(yearmonthday[2]);
            var hour =parseInt(hourminutes[0]);
            var minutes = parseInt(hourminutes[1]);
            return new Date(year, month, day, hour, minutes );
         }
    }

    //when click for new order (out events)
    handleDateClick = (arg) => {  
      this.props.dispatch(PopupCreateCalendar(true));
    }

    //when resize event 
    eventResize = (event) => {    
      debugger;
      var order = { 
        id:0,     
        title:'',
        Start:'',
        End:'',
        Label:'',
        Value:0,
        backgroundColor:'',
        UpdateOrder:0 
      };

      order.id = event.event._def.publicId;
      order.title = event.event.title;
      order.Start = this.FormatDate(event.event._instance.range.start);
      order.End =this.FormatDate(event.event._instance.range.end);
      order.Label  = event.event._def.extendedProps.label;
      order.Value =  event.event._def.extendedProps.value;
      order.backgroundColor = event.event._def.ui.backgroundColor;

      this.props.SetEditOrder({
        ...EditOrder,
        'id': order.id ,
        'title':  order.title ,
        'Start' :order.Start,
        'End': order.End,
        'Label': order.Label,
        'Value':order.Value,
        'backgroundColor':  order.backgroundColor
       });
       var t = this.props.t;
      this.props.dispatch(EditOrders(order,{t}));
    }

    //when click event open popup edit 
    HandleEditPopupClick = (event) => {
      debugger;
      var order = { 
        id:0,     
        title:'',
        Start:'',
        End:'',
        Label:'',
        Value:0,
        backgroundColor:'',
        UpdateOrder:0 
      };
debugger;
      order.id = event.event._def.publicId;
      order.title = event.event.title;
      order.Start = this.FormatDate(event.event._instance.range.start);
      order.End =this.FormatDate(event.event._instance.range.end);
      order.Label  = event.event._def.extendedProps.label;
      order.Value =  event.event._def.extendedProps.value;
      order.backgroundColor = event.event._def.ui.backgroundColor;

      this.props.SetEditOrder({
        ...EditOrder,
        'id': order.id ,
        'title':  order.title ,
        'Start' :order.Start,
        'End': order.End,
        'Label': order.Label,
        'Value':order.Value,
        'backgroundColor':  order.backgroundColor
       });
      this.props.dispatch(PopupEditorderCalendar(true));
    }
}


