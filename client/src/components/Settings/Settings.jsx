import React from 'react';
import axios from 'axios';

const Settings = () => {
  const [IoTChannel, setIoTChannel] = React.useState();
  React.useEffect(() => {
    const fetchIoTChannel = async () => {
      try {
        const data = await axios.get(
          'https://api.thingspeak.com/channels/1773828.json?api_key=0M1SSJLEI0UMM6XR'
        );
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
      </>
    )
  );
};

export default Settings;
