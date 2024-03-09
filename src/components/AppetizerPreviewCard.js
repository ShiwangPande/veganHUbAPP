import React from 'react'
import AddProduct from './AddProduct.js'

function AppetizerPreviewCard({ product, handleAddProduct }) {


    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent '>
            <img className='h-60 mx-auto' src={product.image} alt={product.title} />
            <h2 className='p-2 text-center text-lg'>{product.title}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{product.description}</p>
            <p>₹{product.price}</p>
            <AddProduct product={product} handleAddProduct={handleAddProduct} />
        </div>
    )
}

export default AppetizerPreviewCard