import React from 'react'

function productPreviewCard({ saladItems, handleAddProduct }) {


    return (
        <div className='w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent '>
            <img className='h-60 mx-auto' src={saladItems.image} alt={saladItems.title} />
            <h2 className='text-center p-2 text-lg'>{saladItems.title}</h2>
            <p className='mb-2 h-20 line-clamp-4'>{saladItems.description}</p>
            <p>₹{saladItems.price}</p>
            <div className="flex justify-end">

                <button onClick={() => handleAddProduct(saladItems)} className="bg-yellow-500 hover:bg-yellow-700 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default productPreviewCard