import React from 'react'
import { useEffect } from 'react';

function Cart({ carts, removeCart , quantityInc,quantityDec }) {
  const total=carts.reduce((acc,curr)=>{return acc+curr.price * curr.quantity},0)
  const discount=(total*10)/100  //10% discount
  const finalAmount=total-discount 

  useEffect(() => {
    console.log("Cart updated!", carts);
  }, [carts]);
 
  return (
    <>
{carts.length===0 ?(<p className='pt-32 text-center container mx-auto p-6 text-3xl'>No items added</p>):(
    <div className=''>
      <div className='p-6  bg-gray-100 min-h-screen '>
      <div className='   py-6 '>
      <div className='bg-white mt-10 container w-[90%] mb-0 md:max-w-[60%]   p-4  mx-auto'>
        <p className='text-2xl font-semibold'>Shopping Cart</p>
      {carts.map((items)=>(
       <div key={items.id}>
       
          <img className="w-[30%] h-[30%] md:w-[10%] md:h-[10%] mt-4" src={items.image}/>
         <p className=' mt-4 text-base font-semibold'>{items.title}</p>
         <h1 className='text-base text-gray-800 font-semibold'>${items.price.toFixed(2) * items.quantity}</h1>

         <h1 className='text-base font-semibold'>Quantity: {items.quantity}</h1>
         <div className='space-x-2   space-y-2'>
         <button onClick={()=>quantityInc(items.id)} className='bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500 transition-all duration-300 transform active:scale-95 font-bold'>+</button>
         <button onClick={()=>quantityDec(items.id)} className='bg-yellow-400 px-4 py-1 rounded hover:bg-yellow-500 transition-all duration-300 transform active:scale-95 font-bold '>-</button>
         <button onClick={()=>removeCart(items.id)}className=' mb-4 bg-red-500  px-4 py-1 rounded hover:bg-red-600   transition-all duration-300 transform active:scale-95'>Remove</button>
       
         </div>
         < hr className='border-t-1 border-gray-400 mt-6'/>
       
         </div>
          
       
    
      ))
    
      }
      
        <h1 className=' mt-4 font-bold md:text-xl '>Total: <span className='text-gray-800'>${total}</span></h1>
<p  className=' font-bold md:text-xl '>Discount (10%): ₹{discount.toFixed(2)}</p>
<p className='font-bold md:text-xl '>Final Price: ₹{finalAmount.toFixed(2)}</p>
        <></>
    </div>
    </div>
    </div></div>
)
}

    </>

  )

    
}

export default Cart