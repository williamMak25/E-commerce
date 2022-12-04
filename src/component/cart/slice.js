import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
//import axios from "axios";

const initialState = {
    items: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    cartQuantity: 0,
    cartTotalAmount: 0
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
           const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if(itemIndex >=0){
                state.items[itemIndex].itemQuantity += 1;
                toast.info(`increase ${state.items[itemIndex].title} Quantity`,{
                    position: 'bottom-left'
                })
            }
            else{
            const tempProduct = {...action.payload,itemQuantity: 1};
            state.items.push(tempProduct)
            toast.success(`Add ${action.payload.title}`,{
                position: 'bottom-left'
            })}
            localStorage.setItem("cartItem", JSON.stringify(state.items))
        },
        removeItems: (state,action) => {
            const nextCartItem = state.items.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.items = nextCartItem;

            localStorage.setItem("cartItems", JSON.stringify(state.items))
        }
    }
})
export  const {addItems,removeItems} =itemSlice.actions
export default itemSlice.reducer
export const {state} = initialState