import React from 'react'
// import {useSelector} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { increase ,discount} from '../../reduxtest/Pricestate'
export default function About() {
  // let sharedprice= useSelector((state)=>state.price.value)
  let x = useSelector(state=> state.product.value)
  console.log(x);
  let sendevent = useDispatch()
  return (
    <div className='About'>
      Aboutfff
     <h1 >{x}</h1> 
      ttttt
      <button onClick={()=>{sendevent(increase())}}>increse</button>
      <button onClick={()=>{sendevent(discount())}}>decrease</button>
      </div>
  )
}
