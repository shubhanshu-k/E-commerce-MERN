import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setprice] = React.useState("");

  const [category, setcategory] = React.useState("");

  const [company, setcompany] = React.useState("");
  const [error, setError] = React.useState(false);

  const addProduct = async () => {
    if (!name || !price || !company || !category) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    alert("Product Added Successfully");
  };

  return (
    <div className="form-control">
      <h1>Add Product</h1>
      <input
        type="text"
        className="form-control-login"
        placeholder="Enter product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className="invalid-input">Enter Valid Name </span>
      )}

      <input
        type="text"
        className="form-control-login"
        placeholder="Enter product price"
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      {error && !price && (
        <span className="invalid-input">Enter Valid Price </span>
      )}

      <input
        type="text"
        className="form-control-login"
        placeholder="Enter product category"
        onChange={(e) => {
          setcategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className="invalid-input">Enter Valid category </span>
      )}

      <input
        type="text"
        className="form-control-login"
        placeholder="Enter product company"
        onChange={(e) => {
          setcompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className="invalid-input">Enter Valid company </span>
      )}

      <button type="button" onClick={addProduct} className="login-button">AddProduct
      </button>
    </div>
  );
};
export default AddProduct;
