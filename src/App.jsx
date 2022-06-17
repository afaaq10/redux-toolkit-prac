
import { CakeView } from './View'
import Teams from './Teams';
// import { IcecreamView } from './features/icecream/IcecreamView'
// import { CakeView } from './View'
// import Slice from './Slice'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
      

    <BrowserRouter>
      <div className='App'>
        <Routes>
        <Route path="/" element={<CakeView/>}/>
        <Route path="/teams" element={<Teams/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App
 {/* <CakeView /> */}
   
      {/* 
      <IcecreamView />
      <UserView /> */}
      {/* <Slice />
      <CakeView /> */}