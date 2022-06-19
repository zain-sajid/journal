import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import home from '../../assets/home.gif'
import DeSo from '../../assets/deSo.png'
import auth0 from '../../assets/auth0.png'
import './Auth.css'
import Deso from "deso-protocol";
import { useNavigate } from 'react-router-dom'
const deso = new Deso();

// Log out
// onClick={() => {
//     deso.identity.logout(deso.identity.getUserKey() || '{}');
// }}


const Auth = () => {
    const navigate = useNavigate()
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="auth-container">
            <img className="auth-image" src={home} alt="home"/>
            <div className="auth-button-container">
                <button onClick={async () => {
                        const user = await deso.identity.login();
                        navigate('/home')
                    }}  className="auth-button-deso">
                    <img className="auth-button-image" src={DeSo} alt="deso-button"/>
                    <p>Jump in using DeSo</p>
                </button>
                <button onClick={() => loginWithRedirect()} className="auth-button-auth0">
                    <img className="auth-button-image" src={auth0}  alt="auth0-button"/>
                    <p>Hop in using Auth0</p>
                </button>
            </div>
        </div>
    )
}

export default Auth;