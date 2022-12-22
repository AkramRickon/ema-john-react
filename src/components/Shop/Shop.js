import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from '../../asset/css/Shop.module.css';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDB, getCart, removeFromDB } from '../../utilities/LocalDB';

const Shop = () => {
    console.log('shop rendering');
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        const savedCart = getCart();
        let savedProducts = [];
        if (products.length) {
            for (let key in savedCart) {
                let matchedProduct = products.find(product => product.key === key);
                if (matchedProduct) {
                    matchedProduct.quantity = savedCart[key];
                    savedProducts.push(matchedProduct);
                }
            }
        }
        setCart(savedProducts);
    }, [products])

    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDB(product.key);
    }

    const handleRemoveFromCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {

            const rest = cart.filter(pd => pd.key !== product.key);
            if (exist.quantity > 1) {
                exist.quantity = exist.quantity - 1;
                newCart = [...rest, product];
            }
            else {
                newCart = [...rest];
            }
        }
        else {
            newCart = [...cart];
        }
        setCart(newCart);
        removeFromDB(product.key);
    }

    const handleSearch = (e) => {
        const searchedText = e.target.value;
        console.log(searchedText)
        const matchedProducts = products.filter(pd => pd.name.toLowerCase().includes(searchedText.toLowerCase()));
        console.log("matched products",matchedProducts.length);
        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className={style.inputContainer}>
                <input type='search' placeholder='search product' onChange={handleSearch}></input>
            </div>
            <div className={style.shopContainer}>
                <div className={style.productContainer}>
                    {
                        displayProducts.map(product =>
                            <Product
                                product={product}
                                handleAddToCart={handleAddToCart}
                                handleRemoveFromCart={handleRemoveFromCart}
                                key={product.key}>
                            </Product>)
                    }
                </div>
                <div className={style.cartContainer}>
                    <Cart cart={cart} ></Cart>
                </div>
            </div>

        </>
    );
};

export default Shop;