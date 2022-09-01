import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default class Calendar extends React.Component {
  
  
  
  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" 
      headerToolbar={{ left: 'prev,next,today', 
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth' }}
      plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
      dateClick={this.handleDateClick}
      editable= {true}
      selectable={true}
      droppable={true}
      eventDrop={(info)=>this.moveEventdropCalendar(info)}
      eventClick={
        function(arg){
          alert(arg.event.title)
        }
      }
      events={[
        { title: 'event 1', date:'2022-08-01' },
        { title: 'event 2', date: '2022-08-03' }
      ]}
      />
      
    )
  }


  moveEventdropCalendar = (info) => {
    debugger;
    var axe="";
    //modificamos la fecha en base de datos

 }
   

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg);
  }
}

