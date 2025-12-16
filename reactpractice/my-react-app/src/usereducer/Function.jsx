import React from 'react'
import { useReducer } from 'react'
import Product from '/src/usereducer/Product.jsx';
import Cart from '/src/usereducer/Cart.jsx';
const Function=()=>{
   const [cart,dispatch]=useReducer(reducer,[]);
   function reducer(state,action){
    switch(action.type){
        case"addtocart":
        return [...state,action.payload];
        case "removefromcart":
            return state.filter(item=>item.id !== action.payload );
        case "clearcart":
            return [];
        default:
            return state;
    }
   }

  return (
    <div className='flex bg-gray-200'>
        <Product dispatch={dispatch}/>
        <Cart cart={cart} dispatch={dispatch}/>
    </div>
  )
}

export default Function