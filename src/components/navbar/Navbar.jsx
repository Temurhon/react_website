import React, { useState } from 'react'
//Adding css component
import './navbar.css';

//importing icons
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';

//importing logo from assets folder
import logo from '../../assets/logo.png'

// this function will be used to return the menu (links), which will be wrapped with react fragment.
const Menu = () =>(
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#what'>What is timur</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    </>
)

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
                <Menu />
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
        {/* if the menu is toggled, only if this the variable is true(hence the && sign), then display the div */}
        {toggleMenu &&(

            <div className='timur__navbar-menu_container scale-up-center'>
                {/* menu for the mobile which will be rendered if the toggle menu is set to true */}
                <div className='timur__navbar-menu_container-links'>
               
               
               
                        <Menu />

                    <div className='timur__navbar_menu_container-links-sign'>
                        <p>Sign In</p>
                        <button type = "button">Sign Up</button>

                    </div>

                </div>
                
            </div>

        )

        }

        </div>

        </div>
        
    )
}

export default Navbar
