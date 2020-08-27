import React from 'react';
import './Cart.css'
const Cart = (props) => {
const cart=props.cart
console.log(props.cart);

let total=0;
for (let i = 0; i < cart.length; i++) {
    const itemInfo = cart[i];
    total=total+itemInfo.price;
    
}

function fixNum(str){
    let num=parseFloat(str).toFixed(2);
    return num;
}
    return (
        <div className="cart">
            <h3>Your Enrolled Items</h3>
            <p>Item Orderd:{cart.length}</p>
            <p>Item Prices:${fixNum(total)}</p>
            <div>
                {
                    cart.map(singleItem=><div className="cart-item">
                        <p>{singleItem.name}</p>
                        <span>${singleItem.price}</span>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;