import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvents = {
  title: 'Cumpleanos de faby',
  notes: 'Comprar pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Jose'
  }
}

const initialState = {
  events: [
    tempEvents,
  ],
  activeEvent: null,

}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    saludar: () => {
      console.log('hola desde el store de calendar')
    }
  }
});

export const {saludar} = calendarSlice.actions