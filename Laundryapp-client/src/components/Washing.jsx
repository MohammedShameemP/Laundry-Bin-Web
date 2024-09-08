import React, { useEffect, useState } from "react";
import "./Washing.css";
import { products } from "../Actions/products";
import Add from "./Add";
import Count from "./Count";

function Washing() {

  const [count,setCount]=useState(0)
  const [product, setProduct] = useState([]); // Initialize as an empty array

  useEffect(() => {
    Fetchallproducts();
  }, []);

  const Fetchallproducts = async () => {
    try {
      const response = await products();
      console.log("response in Fetchallproducts", response);
      if (response.data) {
        setProduct(response.data); // Set fetched data
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="washingmain">
      <div className="topdiv">
        <h1 className="washinghead">Washing</h1>
      </div>
      <div className="img">
        <img className="imggr" src="./Group 1082.svg" alt="" />
      </div>
      <div className="product-grid"> {/* Updated to use grid */}
        {product && product.length > 0 ? (
          product.map((item, index) => (
            <div className="product-item" key={index}> {/* Changed from table rows */}
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              {count==0 ? <Add count={count} setCount={setCount}/>:<Count/>}
              


              

            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Washing;