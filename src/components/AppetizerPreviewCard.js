import React from 'react'

function AppetizerPreviewCard({ product, handleAddProduct }) {


    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent '>
            <img className='h-60 mx-auto' src={product.image} alt={product.title} />
            <h2 className='p-2 text-center text-lg'>{product.title}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{product.description}</p>
            <p>₹{product.price}</p>
            <div className="flex justify-end">

                <button onClick={() => handleAddProduct(product)} className="bg-yellow-500 hover:bg-yellow-700 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default AppetizerPreviewCard