import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
// import FacebookLogin from 'react-facebook-login';
// import { GoogleLogin } from 'react-google-login';
// import * as axios from 'axios';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    // responseFacebook = async res => {
    //     const rs = await axios.post(`${process.env.REACT_APP_HOST_API}/auth/customers/login/facebook`, {
    //         accessToken: res.accessToken
    //     })

    //     if(!rs.data.status) return
    //     window.localStorage.setItem('token', JSON.stringify(rs.data.data))  
    // };

    // onFailure = (error) => {
    //     console.log("🚀 ~ file: sign-in.component.jsx ~ line 49 ~ SignIn ~ error", error)
    // };

    // googleResponse =  async res => {
    //     const rs = await axios.post(`${process.env.REACT_APP_HOST_API}/auth/customers/login/google`, {
    //         accessToken: res.accessToken
    //     })

    //     if(!rs.data.status) return
    //     window.localStorage.setItem('token', JSON.stringify(rs.data.data))  
    // }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                        {/* <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={this.responseFacebook}
                        />
                        <GoogleLogin
                            className="GoogleLogin"
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            onSuccess={this.googleResponse}
                            onFailure={this.onFailure}
                        /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
