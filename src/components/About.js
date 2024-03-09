import React from 'react'
import aboutimg from '../assests/images/about.png'

function About() {
    return (
        <div className='text-white'>
            <div className='p-24 grid lg:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <img src="https://i.postimg.cc/HsLrPzTM/top-view-vegan-arrangement-with-food.jpg" alt="about" className='w-[400px] h-[400px] object-cover' />
                </div>
                <div className="">
                    <h1 className='text-4xl font-bold text-center my-7' >About Us</h1>
                    <p className='text-2xl lg:text-xl'>
                        <p>
                            Welcome to Vegan Hub, where plant-based excellence meets seamless service!
                        </p>  <br /><p>
                            At Vegan Hub, we believe in more than just serving delicious vegan dishes—we're dedicated to providing an exceptional dining experience that leaves a lasting impression. Our journey began with a passion for crafting mouthwatering plant-based cuisine, and today, we stand as a beacon of innovation and sustainability in the culinary world.
                        </p>  <br /><p>
                            Driven by a commitment to excellence, we strive to redefine the traditional dining experience through cutting-edge technology and a customer-centric approach. Our team is fueled by creativity, integrity, and a deep-rooted desire to make a positive impact on the planet and our community.
                        </p>  <br /><p>
                            We understand that every meal is an opportunity to make a difference, which is why we've revolutionized our order management process to ensure efficiency and accuracy at every step. Say goodbye to manual order taking and hello to streamlined digital solutions that guarantee prompt service and precise customization options. With our centralized system, we can effortlessly track orders, manage inventory, and provide personalized recommendations tailored to your preferences.
                        </p>  <br /><p>
                            At Vegan Hub, we're not just in the business of serving food—we're in the business of creating memorable experiences. Whether you're indulging in our delectable dishes or exploring our vibrant menu, we invite you to join us on a journey of flavor, sustainability, and culinary innovation.
                        </p>  <br /><p>
                            Thank you for choosing Vegan Hub, where every bite tells a story of compassion, creativity, and conscious living. Together, we're building a brighter, greener future—one delicious meal at a time.
                        </p>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default About