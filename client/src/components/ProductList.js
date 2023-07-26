import React, { useEffect } from "react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.warn(products);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      alert("Product deleted successfully");
      getProduct();
    }
  };

  return (
    <div className="Product-list">
      <h3>Product List</h3>
      <ul>
        <li>S. No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>company</li>
        <li>Operation</li>
      </ul>

      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>Rs.{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(item._id)}
            >
              <FaTrash /> Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
