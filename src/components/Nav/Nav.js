import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (

        <nav role="navigation">
            <Link to="/"><img className="logo" src="https://via.placeholder.com/60.png?text=Tea Rex"
                alt="company logo of tearex with teacup" /></Link>


            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/demo">Demo</Link>
                </li>
            </ul>


        </nav>

    )
}

export default Nav

