import React from 'react';
import AuthApiService from '../../services/AuthApiService';
import TokenService from '../../services/TokenService';
// import bgImg from '../teabg.jpg';
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

            <div className="parent">

                <div className="child">
                    <h2>Log In</h2>

                    <form className="signin-form" onSubmit={this.handleSubmitJwtAuth}>
                        <div className="formField">
                            <label htmlFor="user_name">Username</label>
                            <input type="text" name='user_name' id='user_name' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' />
                        </div>
                        <button type='submit'>Log In</button>
                        <p>Demo username: tearex password: ilovetea</p>
                    </form>
                </div>
            </div>

        )


    }
}
export default Login