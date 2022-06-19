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
                  <td className="h6">
                    IoT Channel Name: {IoTChannel.name.toUpperCase()}
                  </td>
                </tr>
                <tr>
                  <td className="h6">IoT Channel ID: {IoTChannel.id}</td>
                </tr>
                <tr>
                  <td className="h6">
                    IoT Channel Ranking: {IoTChannel.ranking}
                  </td>
                </tr>
                <tr>
                  <td className="h6">
                    IoT Channel API Key: {IoTChannel.api_keys[0].api_key}
                  </td>
                </tr>
                <tr>
                  <td className="h6">
                    For more information about our project{' '}
                    <a
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
