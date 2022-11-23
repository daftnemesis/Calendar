import { Calendar } from 'react-big-calendar'

import { getMessagesES, localizer } from '../../helpers'

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import { useAuthStore, useUiStore } from '../../hooks'
import { useCalendarStore } from '../../hooks/useCalendarStore'
import { useEffect } from 'react'


//Pagina de nuestra aplicacion principal
export const CalendarPage = () => {

  const { user } = useAuthStore()

  const { openDateModal } = useUiStore()
  const { events, setActiveEvent, startLoagingEvents } = useCalendarStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
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
    // console.log({ doubleClick: event })
    openDateModal()

  }
  // Evenot para escuchar cuando se da un solo click sobre el evento
  const onSelect = ( event ) => {
    setActiveEvent(event)
  }
  // Evento que se dispara cuando se cambia la vista del calendario
  // (por defecto mes, semana, dia y agenda)
  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event)
    setLastView(event)
  }

  useEffect(() => {
    startLoagingEvents()
  }, [])
  

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

      <CalendarModal />
      
      <FabAddNew />
      <FabDelete />
    </>
  )
}