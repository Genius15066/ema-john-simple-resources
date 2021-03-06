import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                 <h4 className="product-name">{name}</h4> <br/>
                 <p><small>by:{seller}</small></p>
                 <p>${price}</p>
                 <p><small>Only {stock} left in store-Order soon</small></p>
                 <button onClick={()=>props.handleAddProduct(props.product)} className="cart-btn" > <FontAwesomeIcon style={{marginRight:'10px'}} icon={faShoppingCart} />
Add to Cart</button>
            </div>
        </div>



    );
};

export default Product;