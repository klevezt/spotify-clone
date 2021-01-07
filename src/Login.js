import React from 'react';
import logo from './assets/images/logo.png';
import './assets/css/Login.css';
import { loginUrl } from './spotify';

export default function Login() {
    return (
        <div className='login'>
            <img src={ logo } alt="logo" />

            <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
        </div>
    )
}