import React from 'react';
import AuthApiService from '../../services/AuthApiService';
import TokenService from '../../services/TokenService';
import './Login.css';


class Login extends React.Component {

    // static defaultProps = {
    //     onLoginSuccess: () => { }
    // }

    state = { error: null }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                window.location.reload()
                // this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }


    render() {

        return (

            <section className="signin">
                <h2>Log In</h2>
                <div className="signin-element">

                    <form className='signin-form' onSubmit={this.handleSubmitJwtAuth}>
                        <div>
                            <label htmlFor="user_name">Username</label>
                            <input type="text" name='user_name' id='user_name' />
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