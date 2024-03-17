import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className = "logo">
            <h1>A<span>H</span>.</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skill">Skill</Link></li>
                <li><Link to="/github">Github</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

