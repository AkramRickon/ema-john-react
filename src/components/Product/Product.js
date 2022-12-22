import React from 'react';
import style from '../../asset/css/Product.module.css';
import { FaCartPlus } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

const Product = ({ product, handleAddToCart, handleRemoveFromCart }) => {

    const { name, img, price, star, seller, stock } = product;
    return (
        <div className={style.product}>
            <div>
                <img src={img} alt=""></img>
            </div>
            <div>
                <h4 className={style.name}>{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>{price}</p>
                <p><small>Only {stock} item available</small></p>
                <div>
                    <button className={style.addButton} onClick={() => handleAddToCart(product)}><FaCartPlus />Add to cart</button>
                    <button className={style.removeButton} onClick={() => handleRemoveFromCart(product)}> <MdRemoveShoppingCart />Remove from cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;