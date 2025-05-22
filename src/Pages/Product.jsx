import React from 'react'

function Product({ products, addToCart, removeCart, carts }) {
  
  // Helper function to check if an item is already in the cart
  const isInCart = (productId) => { //receive the argument by a parameter 
    return carts.some(item => item.id === productId);
  };
  
  return (
    <>
    <div className='bg-gray-100 w-full h-full'>
    <div className='p-4 pt-20 gap-8 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {products.map(product => (
       <div key={product.id}> 
       <div className='bg-white p-4 rounded space-y-1 shadow-md flex flex-col justify-between w-full h-full' >
        <img className='w-1/2 h-48 mx-auto object-contain' src={product.image} alt={product.title}/>
        <p className='text-sm font-bold'>{product.title}</p>
        <h1 className='text-xl text-gray-600 font-bold'>${product.price.toFixed(2)}</h1>
        
        {isInCart(product.id) ? ( // argument passing
          <button 
            onClick={() => removeCart(product.id)} 
            className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded shadow-md transition-all duration-300 transform active:scale-95'
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            onClick={() => addToCart(product)} 
            className='w-full bg-blue-400 hover:bg-blue-600 text-white py-2 rounded shadow-md transition-all duration-300 transform active:scale-95'
          >
            Add to Cart
          </button>
        )}
        
       </div>
       </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Product