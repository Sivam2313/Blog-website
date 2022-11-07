import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import imgLogin from '../assets/loginImage.jpg';
import './style/login.css';

const Login = () => {


    const clientId = '582024406527-hpg0uhvrd0c8jp5nj6rfvl23np1ri0l9.apps.googleusercontent.com'

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

  return (
    <div className='login-content'>
        <div className='navbar'>
            <p className='brand'>
                Blog
            </p>
            <div className='links'>
                <div className='links nav-links'>
                    Explore
                </div>
                <div className='links nav-links'>
                    Create
                </div>
                <div className='links'>
                    <button className='login'>
                        Login
                    </button>
                </div>
            </div>
        </div>
        <div className='login1'>
            <div className='login-heading'>
                Login
            </div>
            <div className='input'>
                <input placeholder='Email' type='text' />
                <input placeholder='Password' type='password' />
            </div>
            <div className='buttons'>
                <button className='login-btn btn'>
                    Login
                </button>
                <button className='signup-btn btn'>
                    Sign Up
                </button>
            </div>
            <div className='google-login'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
        <div className='img'>
            <img src = {imgLogin} className='image'></img>
        </div>
    </div>
  )
}

export default Login