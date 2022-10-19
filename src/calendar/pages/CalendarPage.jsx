import { Calendar } from 'react-big-calendar'

import { addHours } from 'date-fns/esm'
import { getMessagesES, localizer } from '../../helpers'

import { Navbar, CalendarEvent } from "../"

import 'react-big-calendar/lib/css/react-big-calendar.css'

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

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event })
  }

  const onSelect = ( event ) => {
    console.log({ onSelect: evet });
  }

  const onViewChanged = ( event ) => {
    console.log({ viewChanged: event })
  }

  return (
    <>
      <Navbar />
      
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 48px)' }}
        messages = {getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
      />

    </>
  )
}