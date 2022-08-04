
import { createSlice } from '@reduxjs/toolkit'
  let Pricestate=createSlice({
    name:"product",
    initialState:{value:0},
    reducers:{
        // increase:({value})=> {value +=100;} ,
        increase:(x)=> {x.value +=100;} ,
        discount:(x)=> {x.value-=100;},
        zero:(x)=>{x.value =0;},
    }
})

export let{increase,discount,zero}=Pricestate.actions ;
export default Pricestate.reducer ;
