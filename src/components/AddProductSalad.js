import React from 'react'

function AddProductSalad({ handleAddProduct, saladItems }) {
    return (
        <div>
            <div className="flex justify-end">

                <button onClick={() => handleAddProduct(saladItems)} className="bg-yellow-500 hover:bg-yellow-700 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default AddProductSalad