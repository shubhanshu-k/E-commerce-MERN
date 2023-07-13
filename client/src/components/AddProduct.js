import React from 'react';

const AddProduct=()=>{
 const [name,setName]=React.useState('');
 const [price,setprice]=React.useState('');

 const [category,setcategory]=React.useState('');

 const [company,setcompany]=React.useState('');



    return (
<div className="form-control">
    <h1>Add Product</h1>
    <input type="text" className="form-control-login" placeholder='Enter product name'
    onChange={(e)=>{setName(e.target.value)}}    
    />
    <input type="text" className="form-control-login" placeholder='Enter product price'
    
    onChange={
  (e)=>{setprice(e.target.value)}
    }
    
    />
    <input type="text" className="form-control-login" placeholder='Enter product category'
    onChange={(e)=>{setcategory(e.target.value)}}
    />
    <input type="text"
    className='form-control-login'
    placeholder='Enter product company'
    onChange={(e)=>{setcompany(e.target.value)}}
/>
    <button type='button' className='login-button' >Add Product </button>

</div>
    )
}
export default AddProduct;