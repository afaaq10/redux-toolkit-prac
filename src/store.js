import { configureStore } from '@reduxjs/toolkit'
import { myReducer } from './Slice.jsx'
const store = configureStore({
    reducer: {
        myReducer: myReducer,
    }
})
export default store