import React, { useState } from 'react'
//Adding css component
import './navbar.css';

//importing icons
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';

//importing logo from assets folder
import logo from '../../assets/logo.png'


const Navbar = () => {


    //Use State Hook
    // First variable will let us know if the mobile menu is being shown or not
    // Second parameter is a function that will allow us to change the first variable state (currently false).
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='timur__navbar'>
           <div className='timur__navbar-links'>
                <div className='timur__navbar-links_logo'>

                    <img src={logo} alt='logo'/>
                </div>
                    <div className='timur__navbar-links_container'>
                        <p><a href='#home'>Home</a></p>
                        <p><a href='#what'>What is timur</a></p>
                        <p><a href='#possibility'>Open AI</a></p>
                        <p><a href='#features'>Case Studies</a></p>
                        <p><a href='#blog'>Library</a></p>
                    </div>       
           </div>

        <div className='timur__navbar-sign'>
            <p>Sign In</p>
            <button type = "button">Sign Up</button>

        </div>
{/* Mobile Menu */}
        <div className='timur__navbar_menu'>
{/* if toggle menu, we can show the a specific icon, the icon to close the menu */}
        {toggleMenu
             ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
             :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
            }

        </div>

        </div>
        
    )
}

export default Navbar
