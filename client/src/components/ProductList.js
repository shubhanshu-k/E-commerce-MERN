import React, { useEffect } from 'react';
import { useState } from 'react';
const ProductList=()=>{
const[products,setProducts]=useState([]);

useEffect(()=>{
    getProduct();
},[])
const getProduct= async ()=>{
let result = await fetch('http://localhost:5000/products');
result=await result.json();
setProducts(result);
}
console.warn(products);
return (
<div className="Product-list">
    <h3>Product List</h3>
 
    {
        products.map((item,index)=>
            <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>Rs.{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            </ul>
        )
    }   
</div>

)
}

export default ProductList;