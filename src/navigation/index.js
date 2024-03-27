import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header.js';
import React, { useState, useEffect } from 'react';
import Routes from '../Routes/Routes.js';
import data from './saladData.js';
import datas from './appetizerData.js';
import axios from "axios";
import { AuthProvider } from '../components/auth/AuthContext.js';

function Navigation() {
    const { saladItems } = data;
    const { appetizerItems } = datas;
    const [cartItems, setCartItems] = useState([]);
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item
                )
            );
        }
    };

    const handleCartClearance = () => {
        setCartItems([]);
    };

    const [ingredients, setIngredients] = useState({
        basil: false,
        cheese: false,
        mushroom: false,
        olive: false,
        pineapple: false,
        tomato: false,
    });

    useEffect(() => {
        const data = localStorage.getItem("ingredients");
        if (data) {
            // set data in string
            setIngredients(JSON.parse(data));
        }
    }, []);


    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);








    return (
        <>
            <AuthProvider >
                <Router >
                    <Header cartItems={cartItems} />
                    <Routes amount={totalPrice} saladItems={saladItems} ingredients={ingredients} appetizerItems={appetizerItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} setIngredients={setIngredients} />
                </Router>
            </AuthProvider>
        </>
    )
}

export default Navigation