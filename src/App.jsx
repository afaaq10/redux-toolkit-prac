
import Home from './pages/Home';
import Cart from './pages/Cart';
// import { IcecreamView } from './features/icecream/IcecreamView'
// import { CakeView } from './View'
// import Slice from './Slice'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
      

    <BrowserRouter>
    
      <div className='App'>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App

   
      {/* 
      <IcecreamView />
      <UserView /> */}
      {/* <Slice />
      <CakeView /> */}