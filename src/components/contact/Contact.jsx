import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import  { zero,increase } from '../../reduxtest/Pricestate'

export default function Contact() {
  let data=useSelector(state=>state.product.value)
  let senevent=useDispatch()
  return (
    <div className='Contact'>Contact
    <h1>{data}</h1>
    <button onClick={()=>senevent(zero())}>zeroo</button>
    
    </div>
  )
}
