import React from 'react';
import home from '../../assets/home.gif'
import deso from '../../assets/deSo.png'
import auth0 from '../../assets/auth0.png'
import './Auth.css'


const Auth = () => {
    return (
        <div className="auth-container">
            <img className="auth-image" src={home}/>
            <div className="auth-button-container">
                <button className="auth-button-deso">
                    <img className="auth-button-image" src={deso}/>
                    <p>Jump in using DeSo</p>
                </button>
                <button className="auth-button-auth0">
                    <img className="auth-button-image" src={auth0}/>
                    <p>Hop in using Auth0</p>
                </button>
            </div>
        </div>
    )
}

export default Auth;