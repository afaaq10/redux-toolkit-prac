import { configureStore } from '@reduxjs/toolkit'
import { myReducer } from './Slice.jsx'
const store = configureStore({
    reducer: {
        myReducer
    }
})

export default store