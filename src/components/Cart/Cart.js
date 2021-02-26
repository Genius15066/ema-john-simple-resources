import React from 'react';

const cart = (props) => {
    const cart=props.cart;

    let total=cart.reduce((total,prd)=>total+prd.price,0)
    let shippingCost=0;
    if(total>350){
        shippingCost=0.99;
    }
    else if(total>150){
      shippingCost=10.99;
    }
    else if(total>0){
        shippingCost=20.99;
    }
    let tax=(total*.1).toFixed(2);
    let newTotal=(total+shippingCost+Number(tax)).toFixed(2);
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>ShippingCost: {shippingCost}</small> </p>
            <p><small>Tax : {tax}</small></p>
            <p>Total Price: {newTotal}</p>
        </div>
    );
};

export default cart;