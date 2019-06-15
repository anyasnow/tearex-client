import React from 'react';
import './Login.css';




class Login extends React.Component {
    render() {
        return (

            <section className="signin">
                <h2>Log In</h2>
                <div className="signin-element">

                    <form className='signin-form'>
                        <div>
                            <label htmlFor="username">Email</label>
                            <input type="text" name='username' id='username' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' />
                        </div>
                        <button type='submit'>Log In</button>
                    </form>
                </div>
            </section>

        )


    }
}
export default Login