import React from 'react'


const Product = ({dispatch}) => {
    const productsData = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 15000 },
  { id: 3, name: "Headphones", price: 2000 },
];


  return (
    <div>
      <h1>Product</h1>
      {productsData.map((item) => (
        <div className='flex'  key={item.id}>
          <div  className="bg-blue-200 w-30 h-30 p-4 m-4 rounded-md shadow-lg ">
            <h2 className='text-bold color-blue-300'>{item.name}</h2>
            <p className=''> ${item.price}</p>
            <button 
            onClick={()=>dispatch({type:"addtocart",payload:item})}
            className="bg-white text-blue-300 px-4 py-2 rounded-md hover:bg-blue-300 hover:text-white hover:shadow-lg"> add </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product