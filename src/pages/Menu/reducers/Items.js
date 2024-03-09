import React, { useContext, useState } from "react";
import { CartContext } from "../menu";
const Items = ({ id, description, title, img, price, quantity }) => {
    const { removeItem, increment, decrement, addcart } = useContext(CartContext);
    const [buttonVisible, setButtonVisible] = useState(true);

    const handleClick = () => {
        setButtonVisible(false);
        addcart(id, img, title, description, quantity, price);

    };

    return (
        <>
            <div className="items-infos flex flex-col">
                <div className="product-img">
                    {img}
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>


                <div className="add-minus-quantity">
                    <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity} disabled />
                    <i className="fas fa-plus add" onClick={() => increment(id)}></i>

                </div>


                <div className="price">
                    <h3>{price}₹</h3>
                </div>

                <div className="remove-items">
                    <i
                        className="fas fa-trash-alt remove"
                        onClick={() => removeItem(id)}></i>
                </div>

                {/* click to add order in cart */}
                <div className="add-minus-quantity">
                    {buttonVisible &&
                        < i
                            className="fas fa-cart-plus add" onClick={handleClick} >  </i>}
                </div>
                {/* <button onClick={() => addcart(id)}>Add to Cart</button> */}


            </div>

            {/* <hr /> */}
        </>
    );
};

export default Items;
