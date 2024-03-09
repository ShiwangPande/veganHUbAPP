import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "../menu";

const ContextCart = () => {
    const { item, clearCart, totalItem, totalAmount, addcart } = useContext(CartContext);

    if (item.length === 0) {
        return (
            <>
                <header>
                    <div className="continue-shopping">
                        <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                        <h3>continue shopping</h3>
                    </div>

                    <div className="cart-icon">
                        <img src="./images/cart.png" alt="cart" />
                        <p>{totalItem}</p>
                    </div>
                </header>

                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count">{totalItem} </span>{" "}
                        items in shopping cart
                    </p>
                </section>
            </>
        );
    }

    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">{totalItem}  </span> items
                    in shopping cart
                </p>

                <div className="cart-item">
                    <div className="grid grid-cols-3 gap-x-52 my-5 gap-20 rounded shadow-lg">
                        {/* <Scrollbars> */}
                        {item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem} />;
                        })}
                        {/* </Scrollbars> */}
                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : <span>{totalAmount}₹</span>
                    </h3>
                    <a href="/cart"><button>checkout</button></a>

                    <button className="clear-cart" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
};

export default ContextCart;
