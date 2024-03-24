import React from 'react'
import "./cart.css"
function Appetizer({ appetizerItems, handleAddProduct }) {
  return (
    <div className=" text-white pt-10 bg-black/50 ">

      <h1 className='text-center font-bolder text-6xl mb-24'>Appetizers</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-40 mx-10'>
        {
          appetizerItems.map((AppetizerItem) => (

            <div className="items-infos flex flex-col items-center">
              <div className="product-img">
                <img className=' mx-auto' src={AppetizerItem.image} alt={AppetizerItem.title} />
              </div>

              <div className="title">
                <h2>{AppetizerItem.title}</h2>
                <p>{AppetizerItem.description}</p>
              </div>
              <div className="price">
                <h3>₹{AppetizerItem.price}</h3>
              </div>

              <div className='add-to-button'>
                <button onClick={() => handleAddProduct(AppetizerItem)} >Add to Cart</button>
              </div>


            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Appetizer