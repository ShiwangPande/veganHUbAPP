import React from 'react'
import Button from './elements/Button.js'

function Banner() {
    return (
        <div className='banner w-full lg:w-2/3 px-7 mx-auto relative mt-28 flex items-center justify-between'>

            <div className='banner-disciption w-full md:w-1/2 p-3'>
                <h2 className='mb-6 text-4xl font-bold text-white'>
                    <span className='text-[#35860c]'>VEGAN HUB </span> <br /> Cloud Kitchen


                </h2>
                <p className='font-semibold text-lg text-white py-2'>
                    Welcome to Vegan Hub, where plant-based excellence meets seamless service!!
                </p>
                <div className="btn-container py-4">
                    <a href="/menu">
                        <Button>Order Now</Button></a>
                    <a href="/menu" className="text-[#35860c] hover:text-[#598642] font-bold text-decoration-line px-3" alt="">
                        see menu
                    </a>
                </div>

            </div>
            <img className='w-2/4 my-4 rounded-3xl' src="https://i.postimg.cc/Jnvqz4SK/salad-cover-pic-min.png" alt="banner" />
        </div>
    )
}

export default Banner