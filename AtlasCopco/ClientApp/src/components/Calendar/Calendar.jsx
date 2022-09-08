import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Createorder from '../Order/CreateOrder';
import EditOrder from '../Order/EditOrder';


export default class Calendar extends React.Component {
  
  constructor(props) {
    super(props)
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

        <EditOrder showEditPopup={this.props.showEditPopup} 
         setshowEditPopup={this.props.setshowEditPopup} ></ EditOrder>
      </>
    )
  }
  
    moveEventdropCalendar = (event,info) => {
      debugger;
      var pepe = event;
      var jose = info;
      //información del titulo y del id
      //event.event._def

      //modificamos la fecha en base de datos

  }

  handleDateClick = (arg) => { // bind with an arrow function
    ///alert(arg);
    this.props.setshowCreatePopup(true);
  }
  HandleEditPopupClick = (calEvent, jsEvent, view) => {
    debugger;
    this.props.setshowEditPopup(true);
  }
}


