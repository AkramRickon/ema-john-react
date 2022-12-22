import React from 'react';
import logo from '../../asset/images/logo.png';
import style from '../../asset/css/Header.module.css';

const Header = () => {
    console.log('Header rendering');
    return (
        <div className={style.header}>
            <div>
                <img src={logo} alt="" className={style.logo}></img>
            </div>

            <nav>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order Review</a>
                <a href='/inventory'>Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;