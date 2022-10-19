import { Calendar } from 'react-big-calendar'

import { addHours } from 'date-fns/esm'
import { getMessagesES, localizer } from '../../helpers'

import { Navbar, CalendarEvent } from "../"

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const events = [{
  title: 'Cumpleanos de faby',
  notes: 'Comprar pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Jose'
  }
}]


//Pagina de nuestra aplicacion principal
export const CalendarPage = () => {


  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  // Evento para escuchar cuando se de un doble click sobre el evento
  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event })
  }
  // Evenot para escuchar cuando se da un solo click sobre el evento
  const onSelect = ( event ) => {
    console.log({ onSelect: event });
  }
  // Evento que se dispara cuando se cambia la vista del calendario
  // (por defecto mes, semana, dia y agenda)
  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event)
    setLastView(event)
  }

  return ( 
    <>
      <Navbar />
      
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 48px)' }}
        messages = {getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

    </>
  )
}