const getCart = () => {
    const cart = localStorage.getItem("shopping-cart");
    return cart ? JSON.parse(cart) : {};
}

const addToDB = (id) => {
    const cart = localStorage.getItem('shopping-cart');
    let shoppingCart = {};
    if (cart) {
        shoppingCart = JSON.parse(cart);
        shoppingCart[id] = shoppingCart[id] + 1 || 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDB = (id) => {
    const cart = localStorage.getItem('shopping-cart');
    let shoppingCart = {};
    if (cart) {
        shoppingCart = JSON.parse(cart);
        if (shoppingCart[id] > 1) {
            shoppingCart[id] = shoppingCart[id] - 1;
        }
        else {
            delete shoppingCart[id];
        }
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export {getCart, addToDB, removeFromDB };
