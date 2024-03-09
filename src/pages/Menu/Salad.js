import React from 'react'
import Menu from './menu'
import "./cart.css"
function Salad({ saladItems, handleAddProduct }) {
  return (
    <div className=" text-white pt-10 bg-black/50  ">

      <h1 className='text-center font-bolder text-6xl mb-24'>Salad</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-40 mx-10'>
        {
          saladItems.map((saladItem) => (

            <div className="items-infos flex flex-col items-center">
              <div className="product-img">
                <img className=' mx-auto' src={saladItem.image} alt={saladItem.title} />
              </div>

              <div className="title">
                <h2>{saladItem.title}</h2>
                <p>{saladItem.description}</p>
              </div>
              <div className="price">
                <h3>${saladItem.price}</h3>
              </div>

              <div className='add-to-button'>
                <button onClick={() => handleAddProduct(saladItem)} >Add to Cart</button>
              </div>


            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Salad