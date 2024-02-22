import React from 'react'
import "./header.css"
import logo from "../images/logo.jpg"
const Header = () => {
    return (
        <div className='MainHeader'>

            <div className='TitleName'>

                <img src={logo} alt="Logo" />
                <h3>Aadils Portfolio</h3>

            </div>

            <div className='HeaderNavbar'>
                <nav>
                    <ul>
                        <li>Projects</li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header
