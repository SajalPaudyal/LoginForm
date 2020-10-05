import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/navbar.css'

function Navbar() {

    return (
        <div>
            <div className='nav-bar'>
                <div className='logo'>
                    <h2>LOGO</h2>
                </div>
                <div className='nav-links'>
                    <ul className='nav'>
                   <Link className='links' to='/login'>
                   <li>Login</li>
                   </Link  >
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar
