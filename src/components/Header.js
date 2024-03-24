import CartIcon from '../assests/icons/cart.svg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header({ cartItems }) {
 
  
    return (
        <nav id='header' className=" text-white">
            <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                <div className="logo-wrapper pl-4 flex items-center ">
                    <Link to='/' className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:4xl">
                        <img src="https://i.postimg.cc/cCKnpJ0Y/vegann-kitechenn.png" alt="Pizza logo" className='w-32 h-32 lg:w-40 lg:h-40 object-contain' />
                    </Link>

                </div>
                <div className="nav-menu-wrapper flex items-center gap-5 justify-between space-x-8">
                    <Link className="text-3xl lg:text-xl" to="/">
                        Home
                    </Link>
                    <Link className="text-3xl lg:text-xl" to="/about">
                        About Us
                    </Link>
                    <Link className="text-3xl lg:text-xl" to="/menu">
                        Menu
                    </Link>

                </div>
                <div className="flex items-center justify-center space-x-3 lg:space-x-10 mx-10 lg:mx-10">
                    <Link to="/cart" className='flex'>
                        <img className='w-7 ' src={CartIcon} alt="cart" />
                        <span className="cart-count">{cartItems.length === 0 ? "" : cartItems.length}</span>
                    </Link>
                    <Nav>
                        <div className='user_icon' eventKey={2} href="/login" style={{ color: "#EEEEEE", fontWeight: "bolder", fontSize: "15px", display: "flex", justifyContent: "center" }}>
                          
                                    <a href="/login">
                                        <button className='btn text-2xl lg:text-xl btn-ghost' variant="outline-light" type='submit' style={{}} >login</button></a>
               
                        </div>
                    </Nav>
                </div>
            </div>
        </nav>
    )
}

export default Header