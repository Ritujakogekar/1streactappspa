import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home </Link>
            </li>
            <li><Link to='/product'>Product </Link>
            </li>
            <li><Link to='/service'>Service </Link>
            </li>
            <li><Link to='/category'>Category </Link>
            </li>
            <li><Link to='/galary'>Gallary </Link>
            </li>
            <li><Link to='/contact'>Contact us </Link>
            </li>
            <li><Link to='/About'>About us </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;