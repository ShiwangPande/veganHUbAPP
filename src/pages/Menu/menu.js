import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./reducers/product";
import ContextCart from "./reducers/ContextMenu";
import { reducer } from "./reducers/reducer";
// import cart from "../../components/cart/Cart";

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {
    // const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete the indv. elements from an Item Cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    // clear the cart
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    // increment the item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    // decrement the item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };
    // add to cart with img and title
    const addcart = (id, img, title, price) => {
        return dispatch({
            type: "ADD_CART",
            payload: { id, img, title, price },
        });

    };






    // we will use the useEffect to update the data
    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        // console.log("Awesome");
    }, [state.item]);

    return (
        <div className="cart ">
            <CartContext.Provider
                value={{ ...state, removeItem, clearCart, increment, decrement, addcart }}>
                <ContextCart />
            </CartContext.Provider>
        </div>
    );
};

export default Cart;
