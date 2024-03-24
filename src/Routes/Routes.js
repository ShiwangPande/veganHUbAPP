import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import PaymentSuccess from '../pages/PaymentSuccess';
import About from '../components/About.js';
import Salad from '../pages/Menu/Salad.js';
import Appetizer from '../pages/Menu/Appetizer.js';
import UserData from '../components/auth/Userdata.js';

const routes = ({ saladItems, appetizerItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, ingredients, setIngredients }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home saladItems={saladItems} appetizerItems={appetizerItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}  />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                <Route path="/appetizer" element={<Appetizer appetizerItems={appetizerItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/salad" element={<Salad saladItems={saladItems} handleAddProduct={handleAddProduct} />} />
                <Route path="/userdata" element={<UserData />} />
            </Routes>
        </div>
    )
}

export default routes