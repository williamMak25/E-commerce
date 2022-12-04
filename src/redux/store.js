import {configureStore} from '@reduxjs/toolkit'
import itemSlice from '../component/cart/slice'

const store = configureStore({
    reducer:{
        addItems: itemSlice,
    }
})

export default store;