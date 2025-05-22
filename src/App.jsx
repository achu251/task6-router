import React from 'react'
import axios from 'axios'
import Product from './Pages/Product'
import  Cart from './Pages/Cart'
import Navbar from './Component/Navbar';
import { BrowserRouter,Route, Routes  } from "react-router";
import {  useState, useEffect } from 'react'

function App() {
  const[carts,setCarts]=useState([])
  const [loading, setLoading] = useState(true);
  const[products,setProducts]=useState([]);
  const[count,setCount]=useState(0)
  
  
      useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
          setProducts(response.data)
          setLoading(false);
        })
          .catch((error)=>{
            console.log(error)
          })
         
      },[])
      
      useEffect(() => {
        console.log("Cart component re-rendered");
      }, [carts]);

      //cart count
      useEffect(() => {
        setCount(carts.length)
      }, [carts]);
    
      if (loading) {
        return <h1 className='pt-16 text-xl semibold'>Loading....</h1>;
      }
      //addtocart button 
      const addToCart = (message) => {
        setCarts((prevCarts) => {
          return [...prevCarts, { ...message, quantity: 1 }] })}

      //     const itemExits = prevCarts.find(item => item.id === message.id);
          
      //     if (itemExits) {
      //       return prevCarts;
      //     } else {
      //       const updated = [...prevCarts, { ...message, quantity: 1 }]; 
      //       return updated;
      //     }
      //   });
      // };

      //remove button
      
      const removeCart = (id) => {
        setCarts((prevCarts) => prevCarts.filter((item) => item.id !== id));
        console.log("Removed item id:", id);
      };


      const quantityInc = (id) => {
        setCarts(prevCarts =>
          prevCarts.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      };

      const quantityDec = (id) => {
        setCarts(prevCarts =>
          prevCarts.map(item =>{
            if(item.id === id ){
           const qty=item.quantity-1
           const  belowOne= qty>1?item.quantity-1:1
           return { ...item, quantity:belowOne };
            }
            return item
          }  
          )
        );
      };
                                                                                         
return (

  <BrowserRouter>
  <Navbar count={count}/>
  <Routes>
    <Route path="/" element={<Product products={products} addToCart={addToCart} removeCart={removeCart}  carts={carts}/>} />
    <Route path="/cart" element={<Cart carts={carts} removeCart={removeCart} quantityInc={quantityInc}  quantityDec={quantityDec}/>} />
  </Routes>
</BrowserRouter>

)
}

export default App