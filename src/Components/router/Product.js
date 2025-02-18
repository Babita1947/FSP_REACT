import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Product() {
    return (
        <div>
            <div className='pContainer'>
                <div className='lContainer'>
                    <Link to='electronics'>ELECTRONICS</Link>
                    <Link to='garment'>GARMENT</Link>
                    <Link to='retails'>RETAILS</Link>
                    <Link to='jewellery'>JEWELLERY</Link>
                </div>
                <div className='rContainer'>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Product