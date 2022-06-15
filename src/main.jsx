import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
// import store from './app/store'
import store from './store'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);




// const initialState={
//   nocakes:15
// }



// createSlice({
//   name:'myslice',
//   initialState,

//   reudcers:{
//     firstReducer:(state,action)=>{
//       state.nocakes+=1

//     },
//     secondReducer:(state,action)=>{
//       state.nocakes+=action.payload


//     }

//   }
// })
// useSelector((state)=>state.)