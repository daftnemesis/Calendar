import { addHours } from 'date-fns'
import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendarStore } from '../../hooks/useCalendarStore'

export const FabDelete = () => {

  const {startDeletingEvent, hasEventSelected} = useCalendarStore()

  const onClick = () => {
    startDeletingEvent()
  }

  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={onClick}
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
    >
      <i className='fas fa-trash-alt' ></i>
    </button>
  )
}
