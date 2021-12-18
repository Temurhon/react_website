import React from 'react'
//Adding css component
import './navbar.css';

//importing icons
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';

//importing logo from assets folder
import logo from '../../assets/logo.png'


const Navbar = () => {
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
        </div>
    )
}

export default Navbar
