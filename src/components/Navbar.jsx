import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

    <div style={{display:'flex', justifyContent: 'space-around'}}>
    <Link to="/">Home</Link>
<Link to="/cart">Cart</Link> 

<span>CartItems: 0</span>
    </div>
   

    </div>
  )
}

export default Navbar