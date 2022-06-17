import { createReducer } from '@reduxjs/toolkit'

const backgroundColor=document.body.style.backgroundColor = "red";
const initialState = {
    cakes: 0,
    backgroundColor: backgroundColor,
    text: "Hello, world",
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
        changeBackgroundColor: (state,action) => {
            state.backgroundColor = document.body.style.backgroundColor =action.payload;
        },

      changeText: (state,action) => {
        state.text = action.payload
      }

    })


