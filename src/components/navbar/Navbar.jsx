import React from 'react'
//Adding css component
import './navbar.css';

//importing icons
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
const Navbar = () => {
    return (
        <div className='timur__navbar'>
           <div className='timur__navbar-links'>
                <div className='timur__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>
           </div>
        </div>
    )
}

export default Navbar
