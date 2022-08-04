import { configureStore } from"@reduxjs/toolkit";
import Pricereducer from './Pricestate'
// step 1
export  let pricestore =configureStore({
    reducer:{
        product : Pricereducer
    },
}) 