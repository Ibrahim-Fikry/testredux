import React from 'react'
import Nav from './../navbar/Nav';
import { useSelector, useDispatch } from 'react-redux';
import {discount,increase} from '../../reduxtest/Pricestate'
export default function Home() {
  let data= useSelector(state=>state.product.value)
  let sendevent= useDispatch()
  return (
    <div className='Home'>
      Home
      <p>{data}</p>
      <button onClick={()=>sendevent(increase())}>up</button>
      <button onClick={()=>sendevent(discount())}>down</button>
    <Nav/>
    </div>
  )
}
