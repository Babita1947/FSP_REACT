import axios from 'axios';
import React, { useState } from 'react';

function DeleteProduct() {
  const [productId, setProductId] = useState('');
  const [msg, setMsg] = useState("");

  const deleteData = () => {
    axios.delete(`http://localhost:1004/product/delete/${productId}`)
    .then((res) => {
        console.log(res.data);
        setMsg(res.data);
    })
    .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG IN DELETING THE DATA");
    });
  };

  const handleRefresh = () => {
    setProductId('');
    setMsg("");
  };

  return (
    <div style={{width:"30%", margin:"50px auto"}} className="delete-product-form">
      <h2>DELETE PRODUCT</h2>
      <br/>
      <input className='form-control' type="text" placeholder='ENTER THE PRODUCT ID' 
       value={productId}
       onChange={(event) => setProductId(event.target.value)}
      />
      <br/>
      <button className='btn btn-outline-danger' onClick={deleteData}>DELETE</button> &nbsp; &nbsp;
      <button className='btn btn-outline-secondary' onClick={handleRefresh}>REFRESH</button>
      <h3 className='text-warning'>{msg}</h3>
    </div>
  );
}

export default DeleteProduct;