import React, { createContext, useReducer, useEffect } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import cartItems from "../../pages/Menu/reducers/Items";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

// add menu to cart





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
  const addMenu = () => {
    return dispatch({
      type: "ADD_MENU",
      payload: cartItems,
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

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log("Awesome");
  }, [state.item]);

  return (
    <div className="carts">
 {/*  add menu to cart */}
      <CartContext.Provider
        value={{
          ...state,
          removeItem,
          clearCart,
          increment,
          decrement,
          addMenu,
        }}>
        <ContextCart />
      </CartContext.Provider>
      
    </div>
  );
};

export default Cart;
