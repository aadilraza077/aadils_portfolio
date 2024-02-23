import React from 'react'
import "./header.css"
import logo from "../images/logo.jpg"
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Projectspage from '../projectspage'
const Header = () => {
    return (
        <div className='MainHeader'>

            <div className='TitleName'>

                <img src={logo} alt="Logo" />
                <h3>Aadils Portfolio</h3>

            </div>
            <Router>
            <div className='HeaderNavbar'>
                
                <nav>
                    <ul>
                        <li>
                         <Link to="/projectspage">Projects</Link> 
                         </li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                
            </div>
            
            <Routes>
                    <Route path='/projectspage' element={<Projectspage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Header
