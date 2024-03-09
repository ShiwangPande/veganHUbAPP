import React from 'react'
import AddProductSalad from './AddProductSalad.js'

function productPreviewCard({ saladItems, handleAddProduct }) {


    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent '>
            <img className='h-60 mx-auto' src={saladItems.image} alt={saladItems.title} />
            <h2 className='text-center p-2 text-lg'>{saladItems.title}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{saladItems.description}</p>
            <p>₹{saladItems.price}</p>
            <AddProductSalad products={saladItems} handleAddProduct={handleAddProduct} />
        </div>
    )
}

export default productPreviewCard