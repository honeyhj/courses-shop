import React from 'react';
import './Shop.css'
import { useState } from 'react';
import CoursesData from '../CoursesData/CoursesData'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products,setProducts]=useState(CoursesData)
    const [cart,setCart]=useState([])
    const handleAddIssue=(item)=>{
        const newCart=[...cart,item]
        setCart(newCart)
    }
    return (
        <div className="wrapper">
                <div className="products">
                    {
                        products.map(product=><Course product={product} handleAddIssue={handleAddIssue}></Course>)
                    }
                </div>
            <div className="cart-section">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;