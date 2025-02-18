import axios from 'axios';
import React, { useState } from 'react';


function AddProduct() {
  const [product, setProduct] = useState({
    pid: '',
    pname: '',
    pqty: '',
    price: '',
  });
  let [msg, setMsg] = useState("");

  const addData = () => {
    axios.post("http://localhost:1004/product/add", product)
    .then((res)=>{
        console.log(res.data);
        setMsg(res.data)
    })
    .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WROGN IN ADDING THE DATA");
    });
  }
  

  const handleRefresh = () => {
    setProduct({ pid: '', pname: '', pqty: '', price: ''});
    setMsg("");
  };
  
  return (
    <div style={{width:"30%", margin:"50px auto"}} className="add-product-form">
      <h2>ADDING PRODUCT</h2>
      <br/>
      <input className='form-control' type="text" placeholder='ENTER THE PRODUCTID' 
       value={product.pid}
       onChange={(event)=>{
          setProduct({...product, pid:event.target.value});
       }}/>
      <br/>
      <input className='form-control' type="text" placeholder='ENTER THE PRODUCT NAME' 
      value={product.pname}
      onChange={(event)=>{
        setProduct({...product, pname:event.target.value});
      }}/>
      <br/>
      <input className='form-control' type="text" placeholder='ENTER THE PRODUCT QUANTITY' 
       value={product.pqty}
       onChange={(event)=>{
          setProduct({...product, pqty:event.target.value});
       }}/>
      <br/>
      <input className='form-control' type="text" placeholder='ENTER THE PRODUCT PRICE' 
       value={product.price}
       onChange={(event)=>{
          setProduct({...product, price:event.target.value});
       }}/>
      <br/>
      <button className='btn btn-outline-primary' onClick={addData}>ADD</button> &nbsp; &nbsp;
      <button className='btn btn-outline-secondary' onClick={handleRefresh}>REFRESH</button>
      <h3 className='text-warning'>{msg}</h3>
    </div>
  );
}

export default AddProduct;
