import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const Products = () => {

const [a,setA]=useState([])    
useEffect(() => {
  
myfunction()

  
}, [])



async function  myfunction() {

const ab= await axios.get('https://fakestoreapi.com/products')
const cd=ab.data
setA(cd)
console.log(cd)
}




  return (
    <div>
   {a.map((x,id)=>
   
   <div key={id} style={{display:"flex", flexDirection:"column", alignItems: "center", marginTop:"55px" }}>
   <img  style={{height:'80px'}}src={x.image} alt="" />
    <h2>Price:{x.price}</h2>
   
    <button>Add to cart</button>

   </div>
   )}
    </div>

  
  )
}

export default Products