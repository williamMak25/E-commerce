import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
    items:[],
    status: null
}
/*export const productsFetch = createAsyncThunk('item/productsFetch', () =>{
    axios.get('https://fakestoreapi.com/products')
    .then(responce => responce.data)
})*/
const itemSlice = createSlice({
    name:'item',
    initialState,
    reducers:{
        addItems: (state,action) => {
            state.items.push(action.payload)
        }
    }
})
export  const {addItems} =itemSlice.actions
export default itemSlice.reducer