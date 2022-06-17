import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    cakes: 0
  
}
export const myReducer = createReducer(
    initialState,
    {
        increment: (state) => {
            state.cakes += 1
        },
        decrement: (state) => {
            state.cakes--

        },
       

    })


