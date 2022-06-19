import React from 'react';
import axios from 'axios';
import DeSo from '../../assets/deSo.png'
import auth0 from '../../assets/auth0.png'
import Deso from "deso-protocol";
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import '../Auth/Auth.css'
const deso = new Deso();

const Settings = () => {
  const [IoTChannel, setIoTChannel] = React.useState();
  const navigate = useNavigate()
  const { logout } = useAuth0();
  React.useEffect(() => {
    const fetchIoTChannel = async () => {
      try {
        const data = await axios.get(
          'https://api.thingspeak.com/channels/1773828.json?api_key=0M1SSJLEI0UMM6XR',{'Access-Control-Allow-Origin': true,});
        setIoTChannel(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchIoTChannel();
  }, []);
  return (
    IoTChannel !== undefined && (
      <>
        <div className="container" style={{ marginTop: '10rem' }}>
          <div className="row justify-content-center">
            <table class="table w-75" style={{ backgroundColor: 'white' }}>
              <tbody>
                <tr>
                  <td className="h6 p-4">
                    IoT Channel Name:{' '}
                    <span className="fw-bold">
                      {IoTChannel.name.toUpperCase()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="h6 p-4">
                    IoT Channel ID:{' '}
                    <span className="fw-bold">{IoTChannel.id}</span>
                  </td>
                </tr>
                <tr>
                  <td className="h6 p-4">
                    IoT Channel Ranking:{' '}
                    <span className="fw-bold">{IoTChannel.ranking}</span>
                  </td>
                </tr>
                <tr>
                  <td className="h6 p-4">
                    IoT Channel API Key:{' '}
                    <span className="fw-bold">
                      {IoTChannel.api_keys[0].api_key}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="h6 p-4">
                    For more information about our project{' '}
                    <a
                      className="fw-bold"
                      style={{ textDecoration: 'none', color: '#AB7BD1' }}
                      href={IoTChannel.url}
                    >
                      click here.
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row justify-content-center">
          <button onClick={async () => {
                const user = await deso.identity.logout(deso.identity.getUserKey() || '{}');
                console.log(user)
                navigate('/')
            }}  className="auth-button-deso">
            <img className="auth-button-image" src={DeSo} alt="deso-button"/>
            <p>Log out using DeSo</p>
          </button>
          <button onClick={() => logout({
            returnTo: 'http://localhost:3000/'
          })} className="auth-button-auth0">
              <img className="auth-button-image" src={auth0}  alt="auth0-button"/>
              <p>Log out using Auth0</p>
          </button>
        </div>
      </>
    )
  );
};

export default Settings;
