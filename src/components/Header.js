import Reac, { useState } from 'react'
import foody from '../assests/images/foody.png';
import CartIcon from '../assests/icons/cart.svg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../context/AuthContext.js'
import { signInWithGoogle, signOutwithGoogle } from '../context/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';

function Header({ cartItems }) {
    const { currentUser } = useAuth();
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
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
                            {
                                currentUser ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="none" id="dropdown-basic" >
                                            <img className=" rounded-full shadow-4" src={localStorage.getItem('profilePic') || currentUser.profilePic} style={{ width: "50px" }} alt="Avatar" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ position: "absolute", left: "-74px" }}>
                                            <Dropdown.Item ><strong>{
                                                localStorage.getItem('name') || currentUser.name}</strong></Dropdown.Item>
                                            <br />
                                            <Dropdown.Item ><strong>Email: </strong>{localStorage.getItem('email') || currentUser.email}</Dropdown.Item>
                                            <br />
                                            <Dropdown.Item onClick={signOutwithGoogle}>Sign Out</Dropdown.Item>
                                            {/* <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown> :
                                    <a href="/login">
                                        <button className='btn text-2xl lg:text-xl btn-ghost' variant="outline-light" type='submit' style={{}} >login</button></a>
                            }
                        </div>
                    </Nav>
                </div>
            </div>
        </nav>
    )
}

export default Header