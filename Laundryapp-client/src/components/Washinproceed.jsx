import React from 'react'
import "./Washinproceed.css"
import { useSelector } from 'react-redux';
const Washinproceed = () => {
  const { productcart } = useSelector((state) => state.cart);
  console.log("productcart",productcart);
  let totalcount=0; 
  let totalprice=0;
  productcart.forEach(e => {
    totalcount=totalcount+e.cartcount
    totalprice=totalprice+e.price
  });
  console.log("totalcount",totalcount);
  console.log("totalprice",totalprice);
  

  return (
    <div><button className='proceedbtn' >Washinproceed</button></div>
  )
}

export default Washinproceed