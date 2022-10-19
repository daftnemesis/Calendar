import React from 'react'


//Componente para darle estilo a la caja de eventos en el calendario, con el cual pordremos personalizar lo que diga dicha caja
export const CalendarEvent = ({event}) => {

  const {title, user} = event

  return (
    <>
      <strong>{ title }</strong>
      <span> - {user.name}</span>
    </>
  )
}
