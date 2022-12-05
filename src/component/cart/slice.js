import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
//import axios from "axios";

const initialState = {
    items: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    cartTotalQuantity: 0,
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
        // Adding Item to cart action
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
        // Remove Entire item from cart action
        removeItems: (state,action) => {
            const nextCartItem = state.items.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.items = nextCartItem;

            localStorage.setItem("cartItems", JSON.stringify(state.items))
        },
        // reduce or increase the quantity of each item action
        addItemQuantity:(state,action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if(state.items[itemIndex].itemQuantity > 1){
                state.items[itemIndex].itemQuantity -= 1
            }else if(state.items[itemIndex].itemQuantity === 1){
                const nextCartItem = state.items.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )
                state.items = nextCartItem;
    
                localStorage.setItem("cartItems", JSON.stringify(state.items))
            }
        },
        // subtotal action
        getTotal: (state,action) => {
          let {total,quantity} = state.items.reduce(
            (cartTotal,items)=>{
                const {price,itemQuantity} = items;
                const itemTotal = price * itemQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += itemQuantity

                return cartTotal
            },{
                total: 0,
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})
export  const {addItems,removeItems,addItemQuantity,getTotal} =itemSlice.actions
export default itemSlice.reducer
export const {state} = initialState