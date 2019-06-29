import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';



class Signup extends React.Component {
    render() {
        return (
            <>

                <section className="parent">

                    <div className="child">
                        <h2>Create your tea collection now</h2>
                        <form className='signup-form'>
                            <div>
                                <label htmlFor="first-name">First name</label>
                                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                            </div>
                            <div>
                                <label htmlFor="last-name">Last name</label>
                                <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                            </div>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' id='username' />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' />
                            </div>
                            <button type='submit'>Sign Up</button>
                        </form>
                        <p>Already have an account? </p>
                        <p><Link to="/login">Log In</Link></p>
                    </div>
                </section>

            </>
        )


    }
}
export default Signup