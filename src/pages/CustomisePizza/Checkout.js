import React, { useState } from "react";
import Pizzaman from "../../assests/images/PizzaMan.png";
import "./index.css";
export default function Checkout({ ingredients, productsItems, handleAddProduct}) {
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <div style={{}}>
        <div className="grid grid-cols-2 ">
          {/* <h1 style={{ fontFamily: "Comfortaa" }}>My Ingredient</h1> */}
          {Object.keys(ingredients).reduce((acc, ing) => {
            return acc + ingredients[ing] ? 1 : 0;
          }, 0) === 0 && <p>No ingredients Selected</p>}
          {Object.keys(ingredients).map((ingredient) => {


            return (
              ingredients[ingredient] && (
                <div className="flex">
                  <p>
                    {/* {ingredient[0].toUpperCase()}
                    {ingredient.substr(1)} */}


                    {productsItems.map((productsItem) => {
                      return (
                        <p className="flex">
                          {productsItem.ingredient === ingredient && (
                            <div className="items-infos flex flex-col items-center my-10">
                              <div className="product-img">
                                <img src={productsItem.image} alt={productsItem.title} />
                              </div>

                              <div className="title">
                                <h2>{productsItem.title}</h2>
                                <p>{productsItem.description}</p>
                              </div>
                              <div className="price">
                                <h3>${productsItem.price}</h3>
                              </div>

                              <div className='add-to-button'>
                                <button onClick={() => handleAddProduct(productsItem)} >Add to Cart</button>
                              </div>


                            </div>


                          )}

                        </p>
                      );
                    })}
                  </p>
                </div>


              )

            );

          })}


        </div>



        <a href="/CustomePizaa">
          <button
            className="proceedToCheckout"
          >
            Go Back
          </button>
        </a>

        <button
          onClick={() => setSuccess(true)}
          className="proceedToCheckout"
          style={{ marginLeft: 10 }}
        >
          Confirm
        </button>
      </div>
      {/* <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" }}>
            <img src={Pizzaman} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Comfortaa" }}>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
