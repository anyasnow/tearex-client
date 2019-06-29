import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/TokenService'
import './Nav.css';

class Nav extends React.Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.forceUpdate()
    }

    renderLogoutLink() {
        return (
            <span className='logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
        </Link>
            </span>
        )
    }

    renderLoginLink() {
        return (
            <span className='not-logged-in'>
                <Link
                    to='/login'>
                    Login
        </Link>

            </span>
        )
    }

    render() {
        return (

            <nav role="navigation" >
                <Link to="/"><img className="logo" src="https://via.placeholder.com/60.png?text=Tea Rex"
                    alt="company logo of tearex with teacup" /></Link>


                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
                    </li>
                    <li>
                        <Link to="/signup">Register</Link>
                    </li>
                    <li>
                        <Link to="/demo">My Teas</Link>
                    </li>
                </ul>


            </nav>

        )
    }
}

export default Nav

