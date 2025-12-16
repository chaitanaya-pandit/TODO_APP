import React from 'react'

const Cart = ({cart,dispatch}) => {
  return (
    <div>
        <h2> cart item order</h2>
        {cart.length === 0 && <p>no items in cart</p>}
        {
            cart.map ((item )=>{
                <div key={item.id} >
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => dispatch({type:"removefromcart",payload:item.id})}>remove</button>
                  
                </div>
            })
        }
        {
            cart.length > 0 && <button onClick={()=>dispatch({type:"clearcart"})}> clear cart</button>
        }

    </div>
  )
}

export default Cart