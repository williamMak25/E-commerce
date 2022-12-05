import {configureStore} from '@reduxjs/toolkit'
import itemSlice, { getTotal } from '../component/cart/slice'

const store = configureStore({
    reducer:{
        addItems: itemSlice,
    }
})
store.dispatch(getTotal())

export default store;