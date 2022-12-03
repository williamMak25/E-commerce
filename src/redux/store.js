import {configureStore} from '@reduxjs/toolkit'
import itemSlice from '../redux//slice'

const store = configureStore({
    reducer:{
        addItems: itemSlice,
    }
})

export default store;