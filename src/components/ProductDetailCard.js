import React from 'react'

function ProductDetailCard({ productsItems }) {
    return (
        <div className='p-4 m-4 rounded-lg bg-slate-50'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl'>{productsItems.title}</h2>
                <p className='text-3xl text-gray-500'>{productsItems.description}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-3xl text-black'>{productsItems.price}</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img className='w-40 h-50 rounded-xl object-cover' src={productsItems.image} alt={productsItems.name} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailCard