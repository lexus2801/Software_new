import { remove } from 'lodash';
import {getProduct} from '../../services/productService';
import HomeHeader from '../ClientCommon/HomeHeader';
let cart=[]
let total=0

export default function handleAddToCart() { 
    handleAddToCart = async (id) => {
        let storage = localStorage.getItem('cart')
        if(storage){
            cart=JSON.parse(storage)
        }
        let product = await getProduct(id)
        let item = cart.find(c=>c.product.data.productId==id)
        if(item){
            item.quantity+=1
        }else{
            cart.push({product,quantity:1})
        }
        localStorage.setItem('cart',JSON.stringify(cart))
        let storage1 = localStorage.getItem('total')
        total=JSON.parse(storage1)
        let totalQ=0
        cart.map(item =>{
            totalQ = totalQ + item.quantity
        })
        total = totalQ
        localStorage.setItem('total',JSON.stringify(total))
        return (
            <HomeHeader />
        )
    }
}



export const getCartTotal = ()=>{
    return localStorage.getItem('total')
}

// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = () =>({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (existingIndex >= 0) {
//         state.cartItems[existingIndex] = {
//           ...state.cartItems[existingIndex],
//           cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
//         };
//         toast.info("Increased product quantity", {
//           position: "bottom-left",
//         });
//       } else {
//         let tempProductItem = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProductItem);
//         toast.success("Product added to cart", {
//           position: "bottom-left",
//         });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     decreaseCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (state.cartItems[itemIndex].cartQuantity > 1) {
//         state.cartItems[itemIndex].cartQuantity -= 1;

//         toast.info("Decreased product quantity", {
//           position: "bottom-left",
//         });
//       } else if (state.cartItems[itemIndex].cartQuantity === 1) {
//         const nextCartItems = state.cartItems.filter(
//           (item) => item.id !== action.payload.id
//         );

//         state.cartItems = nextCartItems;

//         toast.error("Product removed from cart", {
//           position: "bottom-left",
//         });
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     removeFromCart(state, action) {
//       state.cartItems.map((cartItem) => {
//         if (cartItem.id === action.payload.id) {
//           const nextCartItems = state.cartItems.filter(
//             (item) => item.id !== cartItem.id
//           );

//           state.cartItems = nextCartItems;

//           toast.error("Product removed from cart", {
//             position: "bottom-left",
//           });
//         }
//         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//         return state;
//       });
//     },
//     getTotals(state, action) {
//       let { total, quantity } = state.cartItems.reduce(
//         (cartTotal, cartItem) => {
//           const { price, cartQuantity } = cartItem;
//           const itemTotal = price * cartQuantity;

//           cartTotal.total += itemTotal;
//           cartTotal.quantity += cartQuantity;

//           return cartTotal;
//         },
//         {
//           total: 0,
//           quantity: 0,
//         }
//       );
//       total = parseFloat(total.toFixed(2));
//       state.cartTotalQuantity = quantity;
//       state.cartTotalAmount = total;
//     },
//     clearCart(state, action) {
//       state.cartItems = [];
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       toast.error("Cart cleared", { position: "bottom-left" });
//     },
//   },
// });

// export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
//   cartSlice.actions;